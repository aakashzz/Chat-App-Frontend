import React, { useEffect, useState } from "react";
import {
   Button,
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
   Input,
   Typography,
} from "@material-tailwind/react";
import { RiUserSearchLine } from "react-icons/ri";
import UserList from "./UserList";
import { getAllUser } from "../../../services/authenticate.service";
import toast, { Toaster } from "react-hot-toast";

function FindUser() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(!open);
   const [typeUser, setTypeUser] = useState();
   const [getUser, setGetUser] = useState([]);

   async function searchAllUser() {
      console.log(typeUser);
      const responseOfAllUser = await getAllUser(typeUser);
      if (!responseOfAllUser)
         throw toast.error("User Not Found", {
            duration: 3000,
            position: "bottom-right",
         });
      setGetUser(responseOfAllUser.data.data);
   }

   return (
      <div>
         <Button onClick={handleOpen} className="bg-transparent w-fit p-0">
            <RiUserSearchLine className="size-8 text-white" />
         </Button>
         <Dialog open={open} handler={handleOpen}>
            <DialogHeader>Search User for Chatting</DialogHeader>
            <DialogBody>
               <div>
                  <div className="flex gap-x-4 px-2">
                     <Input
                        className="text-black bg-transparent inline outline-none h-10 text-lg font-medium w-full  pl-3 font-Inter"
                        type="text"
                        placeholder="Type User"
                        value={typeUser}
                        onChange={(e) => setTypeUser(e.target.value)}
                        name=""
                        id=""
                     />
                     <button
                        onClick={searchAllUser}
                        className="inline outline-none underline text-[#074C3E] font-bold"
                     >
                        Submit
                     </button>
                  </div>
                  <div className="h-40 w-full">
                     {/* conditional rendering a user exist than show user and request btn Not Found */}
                     {getUser.length > 0 ? (
                        getUser.map((data) => (
                           <UserList
                              key={data._id}
                              _id={data._id}
                              email={data.email}
                              profilePicture={data.profilePicture}
                              fullName={data.fullName}
                           />
                        ))
                     ) : (
                        <Typography
                           variant="h3"
                           className="text-center py-12 text-red-500"
                        >
                           User Not Found
                        </Typography>
                     )}
                  </div>
               </div>
            </DialogBody>
            <DialogFooter>
               <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
               >
                  <span>Cancel</span>
               </Button>
            </DialogFooter>
         </Dialog>
         <Toaster />
      </div>
   );
}

export default FindUser;
