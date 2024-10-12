import axios from "axios";

const baseurl = import.meta.env.VITE_BASEURL;
const config = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
   },
   withCredentials: true,
};

export async function sendRequestUser(_id) {
    try {
       if (!_id) throw new Error("ID Not Send");
       const responseSendRequest = await axios.post(
          `${baseurl}/request/new-request`,
          { receiverId: _id },
          config
       );
       return responseSendRequest;
    } catch (error) {
       console.error("This SendRequest Error", error);
    }
 }
 export async function getAllRequest() {
    try {
       const responseCollectAllRequest = await axios.get(
          `${baseurl}/request/receive-all-request`,
          config
       );
       if (!responseCollectAllRequest)
          console.log(
             "getAllRequest Method Not work",
             responseCollectAllRequest
          );
       return responseCollectAllRequest;
    } catch (error) {
       console.error("This SendRequest Error", error);
    }
 }
 export async function updateRequestStatus(request_id, newStatus) {
    try {
       const responseOfUpdateRequest = await axios.patch(
          `${baseurl}/request/update-request`,
          { requestId: request_id, status: newStatus },
          config
       );
       if (!responseOfUpdateRequest)
          console.log(
             "UpdateRequestStatus Method Not work",
             responseOfUpdateRequest
          );
       return responseOfUpdateRequest;
    } catch (error) {
       console.error("This SendRequest Error", error);
    }
 }
 