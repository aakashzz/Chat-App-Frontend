import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Badge } from "@material-tailwind/react";
import { Link, useSearchParams } from "react-router-dom";

function ListOfContact({ fullName, email, profilePicture, chatId , userId}) {

   return (
      <Link
         to={`/chat/${chatId}`}
         className="w-full h-14 flex mb-1.5 items-center gap-x-4 "
      >
         <span className="">
            <img
               src={profilePicture}
               className="rounded-full object-cover w-[3rem] h-[3rem]"
               alt={fullName}
            />
         </span>
         <span className=" font-Inter">
            <h4 className="text-lg font-semibold text-white">{fullName}</h4>
            <p className="text-xs font-light text-white">{email}</p>
         </span>
         <span className="w-auto h-8  rounded-full bg-[#ff6700] ml-14">
            
         </span>
      </Link>
   );
}

export default ListOfContact;
