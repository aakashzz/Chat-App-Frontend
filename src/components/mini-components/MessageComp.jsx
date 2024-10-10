import React from "react";

function MessageComp() {
   return (
      <div className="h-full w-full bg-transparent px-2 block">
         <div className="flex gap-x-2 ">
            {/* receiver ui */}
            <img src="../../../public/profile.jpeg" className="h-7 rounded-full" alt="" />
          <p className="h-auto w-fit max-w-80  rounded-xl text-sm font-medium font-Inter p-1 px-2 text-black bg-[#4BBC3B]"> Hii buddy kalpesh whrr</p>
         </div>
         <div className="h-auto max-w-80 rounded-xl text-sm font-medium font-Inter p-1 px-2 float-right text-white bg-[#008067]">
            {/* sender ui */}
            Hyy Buddy My Self
         </div>
      </div>
   );
}

export default MessageComp;
