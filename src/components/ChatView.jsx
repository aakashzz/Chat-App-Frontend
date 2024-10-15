import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@material-tailwind/react";
import { IoSendSharp } from "react-icons/io5";
import MessageComp from "./mini-components/MessageComp";
import Loading from "../components/mini-components/Loading";
import { useParams } from "react-router-dom";
import {
   sendMessageMethod,
   showAllMessageMethod,
} from "../services/message.service";
import toast from "react-hot-toast";
// import io from "socket.io-client"

// const ENDPOINT = "http://localhost:2000";
// var socket,selectedCHatCompare;

function ChatView() {
   //TODO: user message send receive and view message creation
   // const navigate = useNavigate();
   const [messages, setMessages] = useState([]);
   const { id } = useParams();
   const [loading, setLoading] = useState(false);
   const [sendMessage, SetSendMessage] = useState("");

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
         console.log(resultOfShowMessage);
      }
      showMessagesFunction();
   }, [id]);

   return (
      <>
         {loading ? (
            <>
               <Loading />
            </>
         ) : (
            (console.log(messages),
            (
               <>
                  <div className="col-span-7 flex flex-col justify-between rounded-2xl bg-[#02362B] shadow-xl text-black my-4 w-full">
                     <div className="h-14 border-b  w-full flex items-center px-4 gap-x-3 ">
                        <span className="w-[2.5rem] h-[2.5rem]">
                           <img
                              src={messages[0]?.sendedBy?.profilePicture}
                              className="rounded-full w-[2.5em] h-[2.5em] object-cover "
                              alt=""
                           />
                        </span>
                        <span className="">
                           <h4 className="text-xl font-Inter font-semibold text-white">
                              {messages[0]?.sendedBy?.fullName}
                           </h4>
                        </span>
                     </div>
                     <div className="h-auto ">
                        {/* Message components */}
                        {messages?.length > 0 ? (
                           <>
                              {messages?.map((value) => (
                                 <MessageComp
                                    profilePicture={
                                       messages[0]?.sendedBy?.profilePicture
                                    }
                                    // sender={value.receiver}
                                    _id={value.sendedBy}
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
                           onChange={(e) => SetSendMessage(e.target.value)}
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
            ))
         )}
      </>
   );
}

export default ChatView;
