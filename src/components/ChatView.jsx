import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Input } from "@material-tailwind/react";
import { IoSendSharp } from "react-icons/io5";
import MessageComp from "./mini-components/MessageComp";
import { logoutUser } from "../services/authenticate.service";
import { useParams } from "react-router-dom";
import { showAllChats } from "../services/chat.service";

function ChatView() {
   //TODO: user message send receive and view message creation
   // const navigate = useNavigate();
   const [messages, setMessages] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      async function getChatData() {
         const response = await showAllChats(id);
         if (!response) throw new Error("Get Chat Method error");
         setMessages(response.data.data);
         console.log(response);
      }
      getChatData();
   }, [id]);

   return (
      <div className="col-span-7 flex flex-col justify-between rounded-2xl bg-[#02362B] shadow-xl text-black my-4 w-full">
         <div className="h-14 border-b  w-full flex items-center px-4 gap-x-3 ">
            <span className="w-[2.5rem] h-[2.5rem]">
               <img
                  src="../../../public/profile.jpeg"
                  className="rounded-full"
                  alt=""
               />
            </span>
            <span className="">
               <h4 className="text-xl font-Inter font-semibold text-white">
                  Aakash Malviya
               </h4>
            </span>
         </div>
         <div className="h-[60vh] ">
            {/* this block is chat views */}
            {
               messages.length > 0 ? (<MessageComp />) : ("Empty")
            }
            
         </div>
         <div className="w-full h-14 p-2 flex gap-x-2 border-t px-4 justify-between font-semibold">
            <input
               type="text"
               placeholder="Type Message ...."
               className="text-white bg-transparent outline-none h-10 text-base font-normal w-full  pl-3 font-Inter"
            />
            <button className="text-white  h-10 w-10 flex items-center  justify-center bg-green-600 rounded-3xl">
               <IoSendSharp />
               {/* <HotToast /> */}
            </button>
         </div>
      </div>
   );
}

export default ChatView;
