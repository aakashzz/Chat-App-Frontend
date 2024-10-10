import React from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
   const authStatus = useSelector((state) => state.authorize.status);
   console.log(authStatus);
   const navigationItems = [
      {
         name: "findUser",
         direction: "",
         active: authStatus,
         icon: <RiUserSearchLine className="size-8 text-white" />,
      },
      {
         name: "requestNotify",
         direction: "",
         active: authStatus,
         icon: <IoMdNotificationsOutline className="size-8 text-white" />,
      },
      {
         name: "userProfile",
         direction: "",
         active: authStatus,
         icon: <FaUserCircle className="size-8 text-white" />,
      },
      {
         name: "Signup",
         direction: "/signup",
         active: !authStatus,
         icon: "",
      },
      {
         name: "Login",
         direction: "/login",
         active: !authStatus,
         icon: "",
      },
   ];
   return (
      <nav className="h-16 w-full px-6 border-b shadow flex justify-between">
         <span className="flex items-center h-full space-x-2">
            <h1 className="text-[#1EFF00] text-3xl font-Inter font-bold">
               🤖 VibeChat
            </h1>
         </span>
         <span className="h-full flex">
            <ol className="flex items-center w-fit gap-x-3 justify-between ">
               {navigationItems.map((value) =>
                  value.active ? (
                     <>
                        {value.icon ? (
                           <li key={value.name}>{value.icon}</li>
                        ) : (
                           <li
                              className={
                                 value.name === "Signup"
                                    ? "font-bold  text-lg px-2.5 py-1 font-Inter text-[#1EFF00]"
                                    : value.name === "Login"
                                    ? "font-bold text-lg text-black font-Inter  px-2.5 py-0.5 rounded-3xl bg-[#1EFF00]"
                                    : ""
                              }
                           >
                              <NavLink key={value.name} to={value.direction}>
                                 {value.name}
                              </NavLink>
                           </li>
                        )}
                     </>
                  ) : null
               )}
            </ol>
         </span>
      </nav>
   );
}

export default Navbar;
