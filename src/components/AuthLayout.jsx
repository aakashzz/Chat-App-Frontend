import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Loading from './mini-components/Loading';

function AuthLayout({children,authenticate = true}) {
    const [loading,setLoading] = useState(true)
    const authStatus = useSelector((state) => state.authorize.status);
    const navigate = useNavigate("/");

    useEffect(()=>{
        setLoading(true)
            if (authenticate && authStatus !== authenticate) {
                navigate("/login")
            }else if(!authenticate && authStatus !== authenticate){
                navigate("/chat")
            }
            setLoading(false)
    },[loading,authStatus,navigate])
  return (
    <>
         {loading ? (
           <Loading />
         ) : (
            <div>{children}</div>
         )}
      </>
  )
}

export default AuthLayout