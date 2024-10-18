import React, { memo, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@material-tailwind/react";
import { IoSendSharp } from "react-icons/io5";
import MessageComp from "./mini-components/MessageComp";
import Loading from "../components/mini-components/Loading";
import { useParams } from "react-router-dom";
import {
   getChatUserMethod,
   sendMessageMethod,
   showAllMessageMethod,
} from "../services/message.service";
import toast from "react-hot-toast";
import {io} from "socket.io-client";

const ENDPOINT = import.meta.env.VITE_ORIGIN_BACKEND;
var socket, selectedChatCompare;

function ChatView({ id }) {

   const [messages, setMessages] = useState([]);
   const [loading, setLoading] = useState(false);
   const [sendMessage, setSendMessage] = useState("");
   const [userProfile, setUserProfile] = useState([]);
   const [socketConnection,setSocketConnection] = useState(false)



   async function sendMessageFunction(e) {
      e.preventDefault();
      if (!sendMessage) {
         toast.error("Message Content Empty", {
            duration: 3000,
            position: "bottom-right",
         });
      }
      const resultSendMessage = await sendMessageMethod(sendMessage, id);
      if (!resultSendMessage) {
         toast.error("Message Not Sended Server Error", {
            duration: 3000,
            position: "bottom-right",
         });
      }
      socket.emit("new message",resultSendMessage)
      setSendMessage("");
   }

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
         socket.emit("join chat",id)
      }
      async function getChatUser() {
         const userProfile = await getChatUserMethod(id);
         setUserProfile(userProfile.data.data[0]);
      }
      getChatUser();
      showMessagesFunction();
      setSendMessage("");
   }, [id]);
   

   
      useEffect(()=>{
         socket = io(ENDPOINT);
         socket.emit("setup",userProfile);
         socket.on("connection",()=> setSocketConnection(true))
      },[])
   useEffect(()=>{
      socket.on("message received",(newMessageReceived)=>{
         if(!selectedChatCompare || selectedChatCompare._id !== newMessageReceived.chat._id){

         }else{
            setMessages([...messages,newMessageReceived])
         }
      })
   },[])

   return (
      <>
         {loading ? (
            <>
               <Loading />
            </>
         ) : (
            <>
               <div className="col-span-7 flex flex-col  justify-between rounded-2xl bg-[#02362B] shadow-xl text-black my-4 w-full">
                  <div className="h-14 border-b  w-full flex items-center px-4 gap-x-3 py-2 ">
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
                  <div className="h-auto  flex flex-col  justify-end pb-2 ">
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
                  <div className="w-full h-14 p-2 flex gap-x-2 border-t px-4 justify-between font-semibold">
                     <input
                        type="text"
                        onChange={(e) => setSendMessage(e.target.value)}
                        placeholder="Type Message ...."
                        className="text-white bg-transparent outline-none h-10 text-base font-normal w-full  pl-3 font-Inter"
                     />
                     <button
                        onClick={sendMessageFunction}
                        className="text-white  h-10 w-10 flex items-center  justify-center bg-green-600 rounded-3xl"
                     >
                        <IoSendSharp />
                        {/* <HotToast /> */}
                     </button>
                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default memo(ChatView);
