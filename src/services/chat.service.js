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

export async function showAllChats(id){
    try {
        const responseOfChats = await axios.get(`${baseurl}/chat/show-chat/${id}`,config);
        if(!responseOfChats) throw new Error("Error in Show All Chats");
        return responseOfChats
    } catch (error) {
        return console.error(error)
    }
}

export async function createNewChat(ContactUserId){
    try {
        const responseOfNewChat = await axios.post(`${baseurl}/chat/new-chat`,{ContactUserId},config);
        if(!responseOfNewChat) throw new Error("Error in CreateNewChat method");
        return responseOfNewChat;
    } catch (error) {   
        return console.error(error)   
    }
}
export async function showAllChatUser(){
    try {
        const responseOfUser = await axios.get(`${baseurl}/chat/show-chat-user`,config);
        if(!responseOfUser) throw new Error("Error in CreateNewChat method");
        return responseOfUser;
    } catch (error) {
        return console.error(error)   
    }   
}