import React from "react";
import { Link } from "react-router-dom";

function ListOfContact({ fullName, email, profilePicture, chatId }) {
   return (
      <>
         <Link to={`/chat/${chatId}`} className="">
            <div className="w-full h-fit flex hover:bg-[#111827] p-2.5 duration-200  rounded-2xl space-y-1 gap-x-3">
               <span className="">
                  <img
                     src={profilePicture}
                     className="rounded-full border object-cover w-11 h-11 md:w-12 md:h-12 lg:h-14 lg:w-14"
                     alt={fullName}
                  />
               </span>
               <span className=" font-Inter">
                  <h4 className="text-sm md:text-base lg:text-lg font-medium text-white ">
                     {fullName}
                  </h4>
                  <p className="text-[11px] md:text-xs font-light text-gray-300">
                     {email}
                  </p>
               </span>
            </div>
            
         </Link>
      </>
   );
}

export default ListOfContact;
