import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";

function Navbar() {
   return (
      <nav className="h-16 w-full px-6 border-b shadow flex justify-between">
         <span className="flex items-center h-full space-x-2">
            <h1 className="text-[#1EFF00] text-3xl font-Inter font-bold">
               🤖 VibeChat
            </h1>
         </span>
         <span className="h-full flex">
            <ol className="flex items-center w-72 justify-between ">
               <li>
                  <RiUserSearchLine className="size-8 text-white" />
               </li>
               <li>
                  <IoMdNotificationsOutline className="size-8 text-white" />
               </li>
               <li>
                  <FaUserCircle className="size-8 text-white" />
               </li>
               <li className="font-bold  text-lg px-2.5 py-1 font-Inter text-[#1EFF00]">
                  SignUp
               </li>
               <li className="font-bold text-lg text-black font-Inter  px-2.5 py-0.5 rounded-3xl bg-[#1EFF00]">
                  Login
               </li>
            </ol>
         </span>
      </nav>
   );
}

export default Navbar;
