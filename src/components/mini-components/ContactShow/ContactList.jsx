import React, { useState } from "react";
import { removeContactUser } from "../../../services/contact.service";
import {toast,Toaster} from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { createNewChat } from "../../../services/chat.service";

//TODO: complete delete and chat functionality in this file
function ContactList({
   email,
   fullName,
   contact_model_id,
   _id,
   profilePicture,
}) {
   const navigate = useNavigate()
   const [chatIcon,setChatIcon] = useState(true)
   async function removeUser(){
      const response = await removeContactUser(contact_model_id);
      if(!response){
         toast.error("Remove Contact UnSuccessFully",{duration:3000,position:"bottom-right"})
      }
      toast.success("Remove Contact SuccessFully",{duration:3000,position:"bottom-right"})
   }

   async function chatUser(){
      const response = await createNewChat(_id);
      console.log(response)
      if(!response){
         toast.error("Chat Not Create Something Have Issue",{duration:3000,position:"bottom-right"})
      }
      toast.success("New Chat Created",{duration:3000,position:"bottom-right"})
      setChatIcon(false)
      navigate(`/chat/${_id}`)
   }
   return (
      <div className="w-full h-14 flex mb-1.5 items-center justify-between gap-x-3 my-2 px-4">
         <div className="flex w-fit items-center justify-between gap-x-2">
            <span className=" h-fit w-fit">
               <img
                  src={profilePicture}
                  className="rounded-full w-[3em] h-[3em] object-cover"
                  alt=""
               />
            </span>
            <span className=" font-Inter">
               <h4 className="text-lg font-semibold text-black">{fullName}</h4>
               <p className="text-xs font-light text-black">{email}</p>
            </span>
         </div>
         <div className="w-fit space-x-2">
            <button
               onClick={removeUser}
               className="text-black text-[14px] hover:bg-red-500 hover:text-white duration-75 font-Inter font-medium border px-2 py-1 border-gray-700 outline-none rounded"
            >
               Remove
            </button>
            {
               chatIcon ? (<button
                  // to={`/chat/${_id}`}
                  onClick={chatUser}
                  className="text-black text-[14px] hover:bg-green-500 hover:text-white duration-75 font-Inter font-medium border px-2 py-1.5 border-gray-700 outline-none rounded"
               >
                  Chat
               </button>) : (<></>)
            }
            
         </div>
         <Toaster />
      </div>
   );
}

export default ContactList;
