import React from "react";
import { sendRequestUser } from "../../../services/request.service";
import toast, { Toaster } from "react-hot-toast";

function UserList({profilePicture,fullName,email,_id}) {
   async function sendRequest() {
      const requestSending = await sendRequestUser(_id);
      if(!requestSending)throw new Error("Request Not Sended");
      toast.success(`Request Send by ${fullName}`,{duration:3000,position:"bottom-right"})
   }
   return (
      <div className="w-full h-14 flex mb-1.5 items-center justify-between gap-x-3 my-2 px-4">
        <div className="flex w-fit items-center justify-between gap-x-2">
            <span className=" h-fit w-fit">
                <img
                src={profilePicture}
                className="rounded-full w-[3em] h-[3em] object-cover"
                alt=""
                />
            </span>
            <span className=" font-Inter">
                <h4 className="text-lg font-semibold text-black">{fullName}</h4>
                <p className="text-xs font-light text-black">
                {email}
                </p>
            </span>
        </div>
         <div className="w-fit">
            <button onClick={sendRequest} className="text-black text-[14px] hover:bg-red-500 hover:text-white duration-75 font-Inter font-medium border px-2 py-1 border-gray-700 outline-none rounded">
               Request +
            </button>
         </div>
         <Toaster />
      </div>
   );
}

export default UserList;
