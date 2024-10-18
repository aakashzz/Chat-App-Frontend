import React from 'react'
import ChatView from '../components/ChatView'
import ChatUser from '../components/ChatUser'
import { useParams } from 'react-router-dom'

function Home() {
  const {id} = useParams();
  return (
    <div className=' grid grid-cols-10 gap-x-4 h-[90vh]'>
        <ChatUser />
        {
          id?.length > 0 ? (<ChatView id={id}/>) : (<></>)
        }
        
    </div>
  )
}

export default Home