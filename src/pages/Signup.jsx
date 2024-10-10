import {
   Card,
   Input,
   Checkbox,
   Button,
   Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function Signup() {
   return (
      <div className="h-96 w-full text-white flex justify-center  ">
         <div className="mb-1 flex flex-col gap-6 mt-4 w-96">
            <Typography
               variant="h3"
               color="white"
               className="block text-center "
            >
               Sign Up
            </Typography>
            <form action="" className="">
               <label className="font-Inter text-xl font-semibold text-[#1EFF00] -mb-3 block">
                  FullName
               </label>
               <input
                  type="text"
                  placeholder="full-Name"
                  className=" h-8 outline-none font-Inter w-full bg-transparent border mt-4 p-2 text-base font-base rounded-lg "
               />
               <label className="font-Inter text-xl mt-3 font-semibold text-[#1EFF00] -mb-3 block">
                  Email
               </label>
               <input
                  type="text"
                  placeholder="email"
                  className=" h-8 outline-none font-Inter w-full bg-transparent border mt-4 p-2 text-base font-base rounded-lg "
               />
               <label className="font-Inter text-xl mt-3 font-semibold text-[#1EFF00] -mb-3 block">
                  Password
               </label>
               <input
                  type="text"
                  placeholder="password"
                  className=" h-8 outline-none font-Inter w-full bg-transparent border mt-4 p-2 text-base font-base rounded-lg "
               />
               <label className="font-Inter text-xl mt-3 font-semibold text-[#1EFF00] -mb-3 block">
                  Choose Avatar / Profile-Picture
               </label>
               <input
                  type="file"
                  placeholder="full-Name"
                  accept="image/**"
                  className=" h-8 outline-none font-Inter w-full bg-transparent  mt-4 text-base font-base pt-1 "
               />
               <div className="mt-6">
                  <Button fullWidth className="bg-[#02362B] font-Inter text-sm">
                     Submit
                  </Button>
                  <Typography
                     color="white"
                     className="mt-4 text-center font-normal"
                  >
                     Already have an account?{" "}
                     <Link to={"/"} className="font-medium text-[#1EFF00] font-Inter">
                        Login
                     </Link>
                  </Typography>
               </div>
            </form>
         </div>
      </div>
   );
}
