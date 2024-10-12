import axios from "axios";

const baseurl = import.meta.env.VITE_BASEURL;
const config = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
   },
   withCredentials: true,
};


export async function getAllContact(){
    try {
        const responseOfAllContact = await axios.get(`${baseurl}/contact/all-contact`,config);
        if(!responseOfAllContact)throw new Error("Error in getAllContact");
        return responseOfAllContact
        
    } catch (error) {
        console.error("This send GetAllContact:- ",error)
    }

}