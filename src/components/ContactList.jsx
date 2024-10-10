import React from "react";
import { FcContacts } from "react-icons/fc";
import ListOfContact from "./mini-components/ListOfContact";

function ContactList() {
   return (
      <div className=" col-span-3  rounded-2xl bg-[#02362B] shadow-xl text-black my-4 ">
         <div className="flex border-b border-white justify-between items-center p-3">
            <h1 className="text-2xl  font-bold font-Inter text-white">
               Chat
            </h1>
            <FcContacts className="size-8"/>
         </div>
         <div className="p-2.5 ">
            <ListOfContact />
            <ListOfContact />
         </div>
      </div>
   );
}

export default ContactList;
