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


export async function   sendMessageMethod(messageContent, chatId) {
   try {
      if (!messageContent && !chatId)
         new Error("Required Filed Not Passing in Method");
      const responseOfSendMessage = await axios.post(
         `${baseurl}/message/send-message`,
         { messageContent, chatId },
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

export async function getChatUserMethod(chatId) {
   try {
      if (!chatId) new Error("Required Filed Not Passing in Method");
      const responseOfGetUser = await axios.get(`${baseurl}/message/show-user-profile/${chatId}`,config);
      if(!responseOfGetUser) new Error("Response of Get User Profile Method Not Work ")
         return responseOfGetUser
   } catch (error) {
      console.error(error);
      new Error(error.message);
   }
}