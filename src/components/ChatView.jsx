import React, { memo, useEffect, useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import MessageComp from "./mini-components/MessageComp";
import { MdDelete } from "react-icons/md";
import {
   getChatUserMethod,
   sendMessageMethod,
   showAllMessageMethod,
} from "../services/message.service";
import toast from "react-hot-toast";
import { deleteChatAndMessage } from "../services/chat.service";
import { useParams } from "react-router-dom";
import "./ChatView.css";
import { Spinner } from "@material-tailwind/react";

const ENDPOINT = import.meta.env.VITE_ORIGIN_BACKEND;
var socket;
function ChatView() {
   const [messages, setMessages] = useState([]);
   const [loading, setLoading] = useState(false);
   const [sendTextMessage, setSendTextMessage] = useState("");
   const [userProfile, setUserProfile] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      socket = new WebSocket(ENDPOINT);
      socket.onopen = () => {
         // setActiveStatus(true);
         socket.send(
            JSON.stringify({
               action: "join",
               room: id,
            })
         );
         
      };
   }, [id]);

   useEffect(() => {
      async function showMessagesFunction() {
         setLoading(true);
         const resultOfShowMessage = await showAllMessageMethod(id);
         if (!resultOfShowMessage) {
            toast.error("Message Not Showing", {
               duration: 3000,
               position: "bottom-right",
            });
         }
         setMessages(resultOfShowMessage.data.data);
         setLoading(false);
      }
      async function getChatUser() {
         const userProfile = await getChatUserMethod(id);
         setUserProfile(userProfile.data.data[0]);
      }

      getChatUser();
      showMessagesFunction();

      setSendTextMessage("");
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

      socket.send(
         JSON.stringify({
            action: "sendMessage",
            data: resultSendMessage.data.data,
            room: id,
         })
      );
      setSendTextMessage("");
   }

   //deleteChat And Message

   async function deleteMessagesAndChat(e) {
      e.preventDefault();
      const response = await deleteChatAndMessage(id);
      if (!response) {
         return toast.error("Chat And Messages Not Delete Server Error", {
            duration: 3000,
            position: "bottom-right",
         });
      }
      toast.success("Chat And Message Delete", {
         duration: 3000,
         position: "bottom-right",
      });
   }

   //websocket access back data
   useEffect(() => {
      socket.onmessage = (message) => {
         const parseMessage = JSON.parse(message.data);
         
         if (parseMessage.action === "sendMessage") {
            setMessages((prevMessages) => [
               ...prevMessages,
               parseMessage.message,
            ]);
         }
      };
   }, []);

   return (
      <>
         {loading ? (
            <div className="h-screen w-full flex justify-center items-center ">
               <Spinner className="h-10 w-10" />
            </div>
         ) : (
            <>
               <div className="lg:col-span-7 lg:border-l-2  lg:pl-3 border-black h-[calc(100vh-2rem)] flex flex-col justify-end bg-transparent text-black w-full py-1">
                  <div className="h-14 flex items-center ">
                     <div className=" w-full flex items-center px-2 gap-x-3 py-2">
                        <span className="">
                           <img
                              src={userProfile?.profilePicture}
                              className="rounded-full w-12 h-12 object-cover "
                              alt=""
                           />
                        </span>
                        <span className="">
                           <h4 className="text-xl font-Inter font-semibold text-white">
                              {userProfile?.fullName}
                           </h4>
                           <span className="text-white font-medium duration-300 font-Inter text-sm">
  
                           </span>
                        </span>
                     </div>
                     <button className="" onClick={deleteMessagesAndChat}>
                        <MdDelete className="size-8 text-red-500  " />
                     </button>
                  </div>
                  <div
                     id="chat-components"
                     className=" overflow-y-scroll h-full"
                  >
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
