import React, { useEffect, useState } from "react";
import { FcContacts } from "react-icons/fc";
import ListOfContact from "./mini-components/ListOfContact";
import Contact from "./mini-components/ContactShow/Contact";
import { showAllChatUser } from "../services/chat.service";

function ChatUser() {
   const [user, setUser] = useState([]);
   const [chatIDs, setChatIDs] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const dataFetch = async () => {
         setLoading(true);
         const response = await showAllChatUser();
         if (!response) throw new Error("ChatUser Not Found");
         //user Data Container
         setUser(response.data.data[0]);

         //chat data container
         setChatIDs(response.data.data[1]);
         setLoading(false);
      };
      dataFetch();
   }, [true]);
   return (
      <div className="col-span-3 lg:border-r-2 border-black h-full lg:pr-3 text-black ">
         <div className="py-2">
            <input type="text" placeholder="Search" className="h-8 text-sm md:text-base md:h-9 bg-[#374151] w-full rounded-full  outline-none border-none pl-4 font-Inter text-white" />
         </div>
         <div className="flex-1 py-2 ">
            {user.length > 0 ? (
               user.map((value, index) => (
                  <ListOfContact
                     key={value[0]._id}
                     fullName={value[0].fullName}
                     email={value[0].email}
                     profilePicture={value[0].profilePicture}
                     chatId={chatIDs[index]}
                     userId={value[0]._id}
                  />
               ))
            ) : (
               <></>
            )}
         </div>
      </div>
   );
}

export default ChatUser;
