import { Button } from "@material-tailwind/react";
import React from "react";

function UserList() {
   return (
      <div className="w-full h-14 flex mb-1.5 items-center justify-between gap-x-3 my-2 px-4">
        <div className="flex w-fit items-center justify-between gap-x-2">
            <span className=" h-fit w-fit">
                <img
                src="../../../public/profile.jpeg"
                className="rounded-full w-[3em] h-[3em]"
                alt=""
                />
            </span>
            <span className=" font-Inter">
                <h4 className="text-lg font-semibold text-black">Aakash Malviya</h4>
                <p className="text-xs font-light text-black">
                malviyaaakash4509@gmail.com
                </p>
            </span>
        </div>
         <div className="w-fit">
            <button className="text-black text-[14px] hover:bg-red-500 hover:text-white duration-75 font-Inter font-medium border px-2 py-1 border-gray-700 outline-none rounded">
               Request +
            </button>
         </div>
      </div>
   );
}

export default UserList;
