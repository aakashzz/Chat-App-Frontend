import React, { useEffect, useState } from "react";
import {
   Button,
   Dialog,
   DialogHeader,
   DialogBody,
   DialogFooter,
   Input,
   Typography,
} from "@material-tailwind/react";
import { FcContacts } from "react-icons/fc";
import ContactList from "./ContactList";
import { getAllContact } from "../../../services/contact.service";

function Contact() {
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(!open);
   const [collectAllContact, setCollectAllContact] = useState([]);
   useEffect(() => {
      const dataFetch = async () => {
         const responseAllRequest = await getAllContact();
         setCollectAllContact(responseAllRequest.data.data);
      };
      dataFetch();
   }, [open]);
   return (
      <div>
         <Button onClick={handleOpen} className="bg-transparent w-fit p-0">
            <FcContacts className="size-8" />
         </Button>
         <Dialog open={open} handler={handleOpen}>
            <DialogHeader>All Contact User / Friend</DialogHeader>
            <DialogBody>
               <div>
                  <div className="h-40 w-full">
                     {/* conditional rendering a user exist than show user and request btn Not Found */}
                     {collectAllContact.length > 0 ? (
                        collectAllContact.map((data) => (
                           <ContactList
                              email={data.contactDetails.email}
                              fullName={data.contactDetails.fullName}
                              profilePicture={
                                 data.contactDetails.profilePicture
                              }
                              contact_model_id={data._id}
                              _id={data.contactDetails._id}
                              key={data._id}
                           />
                        ))
                     ) : (
                        <></>
                     )}
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
            </DialogFooter>
         </Dialog>
      </div>
   );
}

export default Contact;
