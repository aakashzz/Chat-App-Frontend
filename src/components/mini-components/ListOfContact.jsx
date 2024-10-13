import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Badge } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function ListOfContact({fullName,email,profilePicture,message,id}) {
  return (
    <Link to={`/chat/${id}`} className='w-full h-14 flex mb-1.5 items-center gap-x-4 '>
        <span className=''>
            <img src={profilePicture} className='rounded-full object-cover w-[3rem] h-[3rem]' alt="" />
        </span>
        <span className=' font-Inter'>
            <h4 className='text-lg font-semibold text-white'>{fullName}</h4>
            <p className='text-xs font-light text-white'>{email}</p>
        </span>
        <span className='w-auto h-8  rounded-full bg-[#ff6700] ml-14'>
            {/* <p className='text-center p-1 text-[16px] font-semibold'>12+</p> */}
            {
              message.length > 0 ? (<Badge content={message.length} />) : ("")
            }
            
        </span>
    </Link>
  )
}

export default ListOfContact