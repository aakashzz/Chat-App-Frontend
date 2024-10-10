import {
   Button,
   Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import { useState } from "react";
import { SignupUser } from "../services/authenticate.service";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authorize.slice";
import { useNavigate } from "react-router-dom";

export function Signup() {
   const {register,handleSubmit} = useForm()
   const [loading,setLoading] = useState(true)
   const [error,setError] = useState()
   const dispatch = useDispatch()
   const navigate = useNavigate()
   
   async function submitHandler(data){
      setError("");
      setLoading(true);
      console.log(data)
      const formData = new FormData();
      formData.append('fullName', data.fullName);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('profilePicture', data.profilePicture[0]);
      console.log("First",formData.get("profilePicture"))
      console.log(formData)
      try {
         const response = await SignupUser(formData);
         console.log(response)
         if (response) {
            dispatch(login(response));
            navigate("/chat")
         }
      } catch (error) {
         setError(error.message);
      } finally{
         setLoading(false);
      }
   }
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
            <p>{error}</p>
            <form action="" onSubmit={handleSubmit(submitHandler)} className="">
               <label className="font-Inter text-xl font-semibold text-[#1EFF00] -mb-3 block">
                  FullName
               </label>
               <input
                  type="text"
                  placeholder="full-Name"
                  className=" h-8 outline-none font-Inter w-full bg-transparent border mt-4 p-2 text-base font-base rounded-lg "
                  {...register("fullName",{required:true})}
               />
               <label className="font-Inter text-xl mt-3 font-semibold text-[#1EFF00] -mb-3 block">
                  Email
               </label>
               <input
                  type="email"
                  placeholder="email"
                  className=" h-8 outline-none font-Inter w-full bg-transparent border mt-4 p-2 text-base font-base rounded-lg "
                  {...register("email", {
                     required: true,
                     validate: {
                        matchPatern: (value) =>
                           /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                              value
                           ) ||
                           "Email address must be a valid address",
                     },
                  })}
               />
               <label className="font-Inter text-xl mt-3 font-semibold text-[#1EFF00] -mb-3 block">
                  Password
               </label>
               <input
                  type="password"
                  placeholder="password"
                  className=" h-8 outline-none font-Inter w-full bg-transparent border mt-4 p-2 text-base font-base rounded-lg "
                  {...register("password",{required:true})}
               />
               <label className="font-Inter text-xl mt-3 font-semibold text-[#1EFF00] -mb-3 block">
                  Choose Avatar / Profile-Picture
               </label>
               <input
                  type="file"
                  placeholder="full-Name"
                  accept="image/**"
                  className=" h-8 outline-none font-Inter w-full bg-transparent  mt-4 text-base font-base pt-1 "
                  {...register("profilePicture",{required:true})}
               />
               <div className="mt-6">
                  <Button fullWidth className="bg-[#02362B] font-Inter text-sm" type="submit">
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
