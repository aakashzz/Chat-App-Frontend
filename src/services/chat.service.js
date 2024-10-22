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


export async function createNewChat(receiverId){
    try {
        const responseOfNewChat = await axios.post(`${baseurl}/chat/new-chat`,{receiverId},config);
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
export async function deleteChatAndMessage(id){
    try {
        const responseOfDeletedChat = await axios.delete(`${baseurl}/chat/delete-chat/${id}`,config);
        if(!responseOfDeletedChat) throw new Error("Error in deleteChat method");
        return responseOfDeletedChat;
    } catch (error) {
        return console.error(error)   
    }   
}