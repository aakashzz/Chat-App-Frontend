import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "./mini-components/Loading";
import { Spinner } from "@material-tailwind/react";

function AuthLayout({ children, authenticate = true }) {
   const [loading, setLoading] = useState(true);
   const authStatus = useSelector((state) => state.authorize.status);
   const navigate = useNavigate("/");

   useEffect(() => {
      setLoading(true);
      if (authenticate && authStatus !== authenticate) {
         navigate("/");
      } else if (!authenticate && authStatus !== authenticate) {
         navigate("/chat");
      }
      setLoading(false);
   }, [loading, authStatus, navigate]);
   return (
      <>
         {loading ? (
            <div className="h-screen w-full flex justify-center items-center">
               <Spinner className="h-10 w-10" />
            </div>
         ) : (
            <div>{children}</div>
         )}
      </>
   );
}

export default AuthLayout;
