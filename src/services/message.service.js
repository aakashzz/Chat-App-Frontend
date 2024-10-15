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
export async function sendMessageMethod(contentOfMessage, chatId) {
   try {
      if (!contentOfMessage && !chatId)
         new Error("Required Filed Not Passing in Method");
      const responseOfSendMessage = await axios.post(
         `${baseurl}/message/send-message`,
         { contentOfMessage, chatId },
         config
      );
      if (!responseOfSendMessage)
         new Error("Response of Send Message Method Not Work ");
      return responseOfSendMessage;
   } catch (error) {
      console.error(error);
      new Error(error.message);
   }
}
export async function showAllMessageMethod(chatId) {
   try {
      if (!chatId) new Error("Required Filed Not Passing in Method");
      const responseOfAllMessage = await axios.get(
         `${baseurl}/message/show-message/${chatId}`,
         config
      );
      if (!responseOfAllMessage)
         new Error("Response of Show Message Method Not Work ");
      return responseOfAllMessage;
   } catch (error) {
      console.error(error);
      new Error(error.message);
   }
}
