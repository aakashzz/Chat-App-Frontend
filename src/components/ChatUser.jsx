import React, { useEffect, useState } from "react";
import ListOfContact from "./mini-components/ListOfContact";
import Contact from "./mini-components/ContactShow/Contact";
import { showAllChatUser } from "../services/chat.service";
import { Spinner } from "@material-tailwind/react";

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
      <div className="col-span-3  text-black ">
         <div className="flex justify-between items-center p-3">
            <h1 className="text-2xl  font-bold font-Inter text-white">Chat</h1>
            <Contact />
         </div>
         <div>
            {loading ? (
               <div className="h-screen w-full flex justify-center items-center">
                  <Spinner className="h-10 w-10" />
               </div>
            ) : user?.length > 0 ? (
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
