import React from "react";
//TODO: complete delete and chat functionality in this file
function ContactList({
   email,
   fullName,
   contact_model_id,
   _id,
   profilePicture,
}) {
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
               onClick={"sendRequest"}
               className="text-black text-[14px] hover:bg-red-500 hover:text-white duration-75 font-Inter font-medium border px-2 py-1 border-gray-700 outline-none rounded"
            >
               Remove
            </button>
            <button
               onClick={"sendRequest"}
               className="text-black text-[14px] hover:bg-green-500 hover:text-white duration-75 font-Inter font-medium border px-2 py-1 border-gray-700 outline-none rounded"
            >
               Chat
            </button>
         </div>
         {/* <Toaster /> */}
      </div>
   );
}

export default ContactList;
