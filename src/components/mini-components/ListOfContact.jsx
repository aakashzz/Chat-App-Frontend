import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Badge } from "@material-tailwind/react";

function ListOfContact() {
  return (
    <div className='w-full h-14 flex mb-1.5 items-center gap-x-3 '>
        <span className='w-[3rem] h-[3rem]'>
            <img src="../../../public/profile.jpeg" className='rounded-full' alt="" />
        </span>
        <span className=' font-Inter'>
            <h4 className='text-lg font-semibold text-white'>Aakash Malviya</h4>
            <p className='text-xs font-light text-white'>malviyaaakash4509@gmail.com</p>
        </span>
        <span className='w-auto h-8  rounded-full bg-[#ff6700] ml-14'>
            {/* <p className='text-center p-1 text-[16px] font-semibold'>12+</p> */}
            {/* <Badge content="5" /> */}
        </span>
    </div>
  )
}

export default ListOfContact