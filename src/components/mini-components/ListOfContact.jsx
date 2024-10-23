import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Badge } from "@material-tailwind/react";
import { Link, useSearchParams } from "react-router-dom";

function ListOfContact({ fullName, email, profilePicture, chatId, userId }) {
   return (
      <Link to={`/chat/${chatId}`}>
         <div className="w-full h-fit flex space-y-1 gap-x-3">
            <span className="w-auto">
               <img
                  src={profilePicture}
                  className="rounded-full object-cover w-11 h-11 md:w-12 md:h-12 lg:h-14 lg:w-14"
                  alt={fullName}
               />
            </span>
            <span className=" font-Inter">
               <h4 className="text-sm md:text-base lg:text-lg font-medium text-white ">
                  {fullName}
               </h4>
               <p className="text-[11px] md:text-xs font-light text-gray-300">{email}</p>
            </span>
         </div>
         <span className="w-auto h-8  rounded-full bg-[#ff6700] ml-14"></span>
      </Link>
   );
}

export default ListOfContact;
