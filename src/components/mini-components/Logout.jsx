import React, { memo } from "react";
import { logoutUser } from "../../services/authenticate.service";
import { useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import {logout} from "../../redux/slices/authorize.slice"
function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
   const  logoutUserFunction = async (e) => {
      e.preventDefault();
        const logoutResponse = await logoutUser();
        if(logoutResponse) dispatch(logout())
        return navigate("/")
   }
   return (
      /* From Uiverse.io by Jules-gitclerc */
      <button onClick={logoutUserFunction} className="group flex items-center justify-start h-10 w-10 sm:h-11 sm:w-11 md:h-11 lg:w-11 bg-red-600 rounded-full cursor-pointer relative ">
         <div className="flex items-center justify-center w-full ">
            <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
               <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
         </div>
      </button>
   );
}

export default Logout;
