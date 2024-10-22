import React, { memo, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoSendSharp } from "react-icons/io5";
import MessageComp from "./mini-components/MessageComp";
import { MdDelete } from "react-icons/md";
import Loading from "../components/mini-components/Loading";
import {
   getChatUserMethod,
   sendMessageMethod,
   showAllMessageMethod,
} from "../services/message.service";
import toast from "react-hot-toast";
import { io } from "socket.io-client";
import { deleteChatAndMessage } from "../services/chat.service";

const ENDPOINT = import.meta.env.VITE_ORIGIN_BACKEND;
var socket;

function ChatView({ id }) {
   const [messages, setMessages] = useState([]);
   const [loading, setLoading] = useState(false);
   const [sendTextMessage, setSendTextMessage] = useState("");
   const [userProfile, setUserProfile] = useState([]);

   useEffect(() => {
      socket = io(ENDPOINT);
      socket.emit("setup", id);
      socket.on("connection");
   }, []);

   useEffect(() => {
      async function showMessagesFunction() {
         const resultOfShowMessage = await showAllMessageMethod(id);
         if (!resultOfShowMessage) {
            toast.error("Message Not Showing", {
               duration: 3000,
               position: "bottom-right",
            });
         }
         setMessages(resultOfShowMessage.data.data);
         
      }
      async function getChatUser() {
         const userProfile = await getChatUserMethod(id);
         console.log("user profile", userProfile);
         setUserProfile(userProfile.data.data[0]);
      }

      getChatUser();
      showMessagesFunction();

      setSendTextMessage("");
      return () => {
         socket.off("receiveMessage");
      };
   }, [id]);


   //message send 
   async function sendMessageFunction(e) {
      e.preventDefault();
      if (!sendTextMessage) {
         toast.error("Message Content Empty", {
            duration: 3000,
            position: "bottom-right",
         });
         return;
      }

      const resultSendMessage = await sendMessageMethod(sendTextMessage, id);
      if (!resultSendMessage) {
         toast.error("Message Not Sent Server Error", {
            duration: 3000,
            position: "bottom-right",
         });
      }

      socket.emit("sendMessage", {
         sender: id,
         message: resultSendMessage.data.data,
      });
      setMessages([...messages, resultSendMessage.data.data]);
      setSendTextMessage("");
   }

   //deleteChat And Message

   async function deleteMessagesAndChat(e){
      e.preventDefault();
      const response = await deleteChatAndMessage(id);
      if(!response){
         return toast.error("Chat And Messages Not Delete Server Error", {
            duration: 3000,
            position: "bottom-right",
         });
      }
      toast.success("Chat And Message Delete",{duration:3000,position:"bottom-right"});
   }

   useEffect(() => {
      socket.on("receiveMessage", (message) => {
         console.log("Received", message);
         setMessages((prevMessages) => [...prevMessages, message]);
      });
   }, []);

   return (
      <>
         {loading ? (
            <>
               <Loading />
            </>
         ) : (
            <>
               <div className="col-span-7 flex flex-col  justify-between rounded-2xl bg-[#02362B] shadow-xl text-black my-4 w-full">
                  <div className="h-14 border-b flex items-center pr-3 ">
                     <div className=" w-full flex items-center px-4 gap-x-3 py-2">

                     <span className="w-[2.5rem] h-[2.5rem]">
                        <img
                           src={userProfile?.profilePicture}
                           className="rounded-full w-[2.5em] h-[2.5em] object-cover "
                           alt=""
                        />
                     </span>
                     <span className="">
                        <h4 className="text-xl font-Inter font-semibold text-white">
                           {userProfile?.fullName}
                        </h4>
                     </span>
                     </div>
                     <button className="" onClick={deleteMessagesAndChat}>
                        <MdDelete className="size-8 text-red-500  "/>
                     </button>
                  </div>
                  <div className="h-[24rem] overflow-y-scroll  pb-2 ">
                     {/* Message components */}
                     {messages?.length > 0 ? (
                        <>
                           {messages?.map((value) => (
                              <MessageComp
                                 key={value._id}
                                 profilePicture={
                                    value?.sendedBy?.profilePicture
                                 }
                                 sender={userProfile?._id}
                                 _id={value.sendedBy?._id}
                                 content={value.messageContent}
                              />
                           ))}
                        </>
                     ) : (
                        <></>
                     )}
                  </div>
                  <div className="">
                     <form
                        action=""
                        onSubmit={sendMessageFunction}
                        className="w-full h-14 p-2 flex gap-x-2 border-t px-4 justify-between font-semibold"
                     >
                        <input
                           type="text"
                           value={sendTextMessage}
                           onChange={(e) => setSendTextMessage(e.target.value)}
                           placeholder="Type Message ...."
                           className="text-white bg-transparent outline-none h-10 text-base font-normal w-full  pl-3 font-Inter"
                        />
                        <button
                           type="submit"
                           className="text-white  h-10 w-10 flex items-center  justify-center bg-green-600 rounded-3xl"
                        >
                           <IoSendSharp />
                           {/* <HotToast /> */}
                        </button>
                     </form>
                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default memo(ChatView);
