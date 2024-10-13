import axios from "axios";

const baseurl = import.meta.env.VITE_BASEURL;
const config = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
   },
   withCredentials: true,
   force: true,
};

export async function getAllContact() {
   try {
      const responseOfAllContact = await axios.get(
         `${baseurl}/contact/all-contact`,
         config
      );
      if (!responseOfAllContact) throw new Error("Error in getAllContact");
      return responseOfAllContact;
   } catch (error) {
      console.error("This send GetAllContact:- ", error);
   }
}

export async function removeContactUser(contactDoc_id) {
   try {
      const responseOfDeleteContact = await axios.delete(
         `${baseurl}/contact/delete-contact/${contactDoc_id}`,
         config
      );
      if (!responseOfDeleteContact) throw new Error("Error in Remove contact");
      return responseOfDeleteContact;
   } catch (error) {
      console.error(error);
   }
}
