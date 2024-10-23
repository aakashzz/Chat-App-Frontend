import React from "react";

function MessageComp({ profilePicture, content, sender, _id }) {
   return (
      <div className="h-fit w-full bg-transparent px-2 block">
         <div className={`flex gap-x-2 items-center py-2 ${ _id !== sender ? 'justify-end' : 'justify-start'}`}>
            {/* receiver ui bg-[#4BBC3B] */}
            {
               _id === sender && 
            <img
               src={profilePicture}
               className="h-10 w-10 rounded-full object-cover"
               alt=""
            />
            }
            <div
              className={`${
               _id === sender
                  ? "h-auto w-fit max-w-80 rounded-xl text-sm md:text-base font-medium font-Inter p-1 px-2 text-white bg-[#0f172a] "
                  : "h-auto max-w-80 rounded-xl text-sm md:text-base font-medium font-Inter p-1 px-2 text-white bg-[#008067]"
            }`}
            >
               {content}
            </div>
         </div>
      </div>
    
   );
}

export default MessageComp;
