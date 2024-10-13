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

export async function sendNewMessage(sendTo, messageContent) {
   const responseOfNewMessage = await axios.post(
      `${baseurl}/message/send-message`,
      { sendTo, messageContent },
      config
   );
   if(!responseOfNewMessage)throw new Error("Send New Message Error");
   return responseOfNewMessage
}
