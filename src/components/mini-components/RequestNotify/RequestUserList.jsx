import React, { useRef, useState } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { updateRequestStatus } from "../../../services/request.service";
import { toast, Toaster } from "react-hot-toast";

function RequestUserList({ email, profilePicture, request_id, _id, fullName }) {
   async function updateRequest(value) {
      await updateRequestStatus(request_id, value);
      if (value === "Accept") {
         toast.success("Request Accept SuccessFully", {
            duration: 3000,
            position: "bottom-right",
         });
      }toast.success("Request Reject SuccessFully",{duration:3000,position:"bottom-right"})
   }
   return (
      <div className="w-full h-14 flex mb-1.5 items-center justify-between gap-x-3 my-2 px-4">
         <div className="w-full h-14 flex mb-1.5 items-center justify-between gap-x-3 ">
            <div className="flex w-fit items-center justify-between gap-x-2">
               <span className=" h-fit w-fit">
                  <img
                     src={profilePicture}
                     className="rounded-full w-[3em] h-[3em] object-cover"
                     alt=""
                  />
               </span>
               <span className=" font-Inter">
                  <h4 className="text-lg font-semibold text-black">
                     {fullName}
                  </h4>
                  <p className="text-xs font-light text-black">{email}</p>
               </span>
            </div>
            <div className="w-20 flex justify-between items-center">
               <button
                  value={"Accept"}
                  onClick={() => updateRequest("Accept")}
                  className="text-green-600 rounded-full  "
               >
                  <BsCheckCircle className="size-8 " />
               </button>
               <button
                  onClick={() => updateRequest("Reject")}
                  className="text-black rounded-full "
               >
                  <ImCancelCircle className="size-8 text-red-600" />
               </button>
               <Toaster />
            </div>
         </div>
      </div>
   );
}

export default RequestUserList;
