import React, { memo, useEffect, useState } from "react";
import {
   Button,
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
   Input,
   Typography,
   Badge,
} from "@material-tailwind/react";
import { IoMdNotificationsOutline } from "react-icons/io";
import RequestUserList from "./RequestUserList";
import { getAllRequest } from "../../../services/request.service";

function RequestReceive() {
   const [open, setOpen] = React.useState(false);
   const [allRequests, setAllRequests] = useState([]);
   const [notification,setNotification] = useState(0)

   async function handleOpen() {
      setOpen(!open);
   }

   //function of getting request
   useEffect(() => {
      const dataFetch = async () => {
         const responseAllRequest = await getAllRequest();
         setAllRequests(responseAllRequest.data.data);
         setNotification(responseAllRequest.data.data.length)
      };
      dataFetch();
   }, [open]);

   return (
      <div>
            <Button onClick={handleOpen} className="bg-transparent w-fit p-0">
               {
                  notification > 0 ? (<Badge content={notification} className="text-xs size-4 p-0">
                     <IoMdNotificationsOutline className="size-8 text-white" />
               </Badge>) : (<IoMdNotificationsOutline className="size-8 text-white" />)
               }
               
            </Button>
         <Dialog open={open} handler={handleOpen}>
            <DialogHeader>All Request</DialogHeader>
            <DialogBody>
               {/* <button onClick={dataFetch}>Render</button> */}
               <div className="h-40 w-full">
                  {/* conditional rendering a user exist than show user and request btn Not Found */}
                  {allRequests ? (
                     allRequests.map((data) => (
                        <RequestUserList
                           key={data?._id}
                           _id={data?.senderId?._id}
                           email={data?.senderId?.email}
                           profilePicture={data?.senderId?.profilePicture}
                           fullName={data?.senderId?.fullName}
                           request_id={data?._id}
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
      </div>
   );
}

export default memo(RequestReceive);
