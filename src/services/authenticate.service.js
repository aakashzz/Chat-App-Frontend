import axios from "axios";

const baseurl = import.meta.env.VITE_BASEURL;

export async function SignupUser(formData) {
    // const profilePicture = profilePicture.FileList[0]
    
  try {
     const response = await axios.post(`${baseurl}/users/registration`, formData);
      if (response.data.data.length > 0 ) {
          return loginUser({email,password})
      }
      console.log(response)
     return response;

  } catch (error) {
        console.error("SignUp Error",error)
        throw new Error(error.message)
  }
}

export async function loginUser(formData){
    try {
        const response = await axios.post(`${baseurl}/users/login`,formData);
        console.log("This Response",response)
        return response;
    } catch (error) {
        console.error("SignUp Error",error)
        throw new Error(error.message)
    }
}

export async function logoutUser() {
    const response = await axios.get(`${baseurl}/users/logout`)
    return response
}

export async function getCurrentUser() {
    const response = await axios.get(`${baseurl}/users/getUser`);
    return response;
}