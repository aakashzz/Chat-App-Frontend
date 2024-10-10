import React, { useState } from 'react'
import {
    Button,
    Typography,
 } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Loading from '../components/mini-components/Loading';
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authorize.slice";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../services/authenticate.service';

function Login() {
   const {register,handleSubmit} = useForm()
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const [loading,setLoading] = useState()
   const [error,setError] = useState()

   async function submitHandler(data){
      setError("");
      setLoading(true);
      console.log(data)
      try {
         const response = await loginUser(data);
         console.log(response)
         if (response) {
            dispatch(login(response.data.data))
            navigate("/chat")
         }
      } catch (error) {
         console.error(error)
         setError(error.message)
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
               Login
            </Typography>
            <p>{error}</p>
            <form onSubmit={handleSubmit(submitHandler)} className="">
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
              
               <div className="mt-6">
                  <Button type='submit' fullWidth className="bg-[#02362B] font-Inter text-sm">
                     Submit
                  </Button>
                  <Typography
                     color="white"
                     className="mt-4 text-center font-normal"
                  >
                     Don't have an account?{" "}
                     <Link to="/signup" className="font-medium text-[#1EFF00] font-Inter">
                        Signup
                     </Link>
                  </Typography>
               </div>
            </form>
         </div>
      </div>
  )
}

export default Login