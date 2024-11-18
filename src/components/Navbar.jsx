import React, { memo, useEffect, useState } from "react";
import { IoIosChatbubbles } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiUserSearchLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentUser } from "../services/authenticate.service";
import Logout from "./mini-components/Logout";
import FindUser from "./mini-components/UserFind/FindUser";
import RequestReceive from "./mini-components/RequestNotify/RequestReceive";

function Navbar() {
   const authStatus = useSelector((state) => state.authorize.status);
   const [image, setImage] = useState("");
   useEffect(() => {
      async function getUserImage() {
         const responseAsJson = await getCurrentUser();
         setImage(responseAsJson.data?.data?.profilePicture);
      }

      getUserImage();
   }, [authStatus]);

   const navigationItems = [
      {
         name: "findUser",
         direction: "",
         active: authStatus,
         icon: <FindUser />,
      },
      {
         name: "requestNotify",
         direction: "",
         active: authStatus,
         icon: <RequestReceive />,
      },
      {
         name: "userProfile",
         direction: "",
         active: authStatus,
         icon: image ? (
            <img
               src={image}
               className="h-10 w-10 sm:h-11 sm:w-11 md:h-11 lg:w-11 rounded-full object-cover"
               alt=""
            />
         ) : (
            <img
               src={
                  "https://thebankingacademy.com/public/images/speakers/dummy-img.png"
               }
               className="h-10 w-10 sm:h-11 sm:w-11 md:h-11 lg:w-11 rounded-full object-cover"
               alt=""
            />
         ),
      },
      {
         name: "logout",
         direction: "/",
         active: authStatus,
         icon: <Logout /> || null,
      },
      {
         name: "Signup",
         direction: "/signup",
         active: !authStatus,
         icon: "",
      },
      {
         name: "Login",
         direction: "/",
         active: !authStatus,
         icon: "",
      },
   ];
   return (
      <nav className="h-16 w-full px-4 flex border-b-2 border-black  justify-between">
         <span className="flex items-center h-full space-x-2">
            <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-Inter font-semibold">
               VibeChat
            </h1>
         </span>
         <span className="h-full flex">
            <ol className="flex items-center w-fit gap-x-2 justify-between ">
               {navigationItems.map((value) =>
                  value.active ? (
                     <>
                        {value.icon ? (
                           <li key={value.name}>{value.icon}</li>
                        ) : (
                           <li
                              key={value.name}
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
