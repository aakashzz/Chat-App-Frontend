import React from "react";

function MessageComp({
   profilePicture,
   content,
   sender,
   _id,
}) {
   return (
      <div className="h-full w-full bg-transparent px-2 block">
         <div className="flex gap-x-2 items-center py-2">
            {/* receiver ui */}
            <img
               src={profilePicture}
               className="h-7 w-7 rounded-full object-cover"
               alt=""
            />
            <div
               className={`${
    _id   
                     ? "h-auto w-fit max-w-80  rounded-xl text-sm font-medium font-Inter p-1 px-2 text-black bg-[#4BBC3B]"
                     : "h-auto max-w-80 rounded-xl text-sm font-medium font-Inter p-1 px-2 float-right text-white bg-[#008067]"
               }`}
               
            >
               {content}
            </div>
         </div>
      </div>
   );
}

export default MessageComp;
