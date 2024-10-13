import axios from "axios";

const baseurl = import.meta.env.VITE_BASEURL;
const config = {
   headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true,
   },
   withCredentials: true,
};

export async function SignupUser(formData) {
   // const profilePicture = profilePicture.FileList[0]
   try {
      const response = await axios.post(
         `${baseurl}/users/registration`,
         formData
      )
      if (response) loginUser(formData)
      return response;
   } catch (error) {
      console.error("SignUp Error", error);
      throw new Error(error.message);
   }
}

export async function loginUser({ email, password }) {
   try {
      const response = await axios.post(
         `${baseurl}/users/login`,
         { email, password },
         config
      );
      return response;
   } catch (error) {
      console.error("Login Error", error);
      throw new Error(error.message);
   }
}

export async function logoutUser() {
   const response = await axios.get(`${baseurl}/users/logout`, config);
   return response;
}

export async function getCurrentUser() {
   try {
      const response = await axios.get(`${baseurl}/users/getUser`, config);
      if (!response) console.log("Response Not here", response);
      return response;
   } catch (error) {
      console.error("This GetUser Error", error);
   }
}
export async function getAllUser(userName) {
   try {
      const response = await axios.post(
         `${baseurl}/users/findAllUser`,
         { userName },
         config
      );
      if (!response) console.log("allUser Method Not work", response);
      return response;
   } catch (error) {
      console.error("This findAllUser Error", error);
   }
}
