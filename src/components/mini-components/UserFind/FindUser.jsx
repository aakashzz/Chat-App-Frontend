import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Typography
  } from "@material-tailwind/react";
import { RiUserSearchLine } from 'react-icons/ri';
import UserList from './UserList';

function FindUser() {
    const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
  return (
    <div>
        <Button onClick={handleOpen} className='bg-transparent w-fit' >
       <RiUserSearchLine className="size-8 text-white" />
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Search User for Chatting</DialogHeader>
        <DialogBody>
            <div>
                <Input className="text-black bg-transparent outline-none h-10 text-lg font-medium w-full  pl-3 font-Inter" type="text" placeholder='Type User' name="" id="" />
                <div className='h-40 w-full'>
                    {/* conditional rendering a user exist than show user and request btn Not Found */}
                    <UserList />
                    <Typography variant='h3' className='text-center py-12 text-red-500'>User Not Found</Typography>
                </div>
            </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default FindUser