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
      <div className=" col-span-3  rounded-2xl bg-[#02362B] shadow-xl text-black my-4 ">
         <div className="flex border-b border-white justify-between items-center p-3">
            <h1 className="text-2xl  font-bold font-Inter text-white">Chat</h1>
            <Contact />
         </div>
         <div className="p-2.5 ">
            {user.length > 0 ? (
               user.map((value, index) => (
                  <ListOfContact
                     fullName={value[0].fullName}
                     email={value[0].email}
                     profilePicture={value[0].profilePicture}
                     chatId={chatIDs[index]}
                     userId={value[0]._id}
                  />
               ))
            ) : (
               <>Chats Have Empty</>
            )}
         </div>
      </div>
   );
}

export default ChatUser;
