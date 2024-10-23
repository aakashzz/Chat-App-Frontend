import React from 'react'
import ChatView from '../components/ChatView'
import ChatUser from '../components/ChatUser'
import { useParams } from 'react-router-dom'

function Home() {
  const {id} = useParams();
  return (
    <div className=' lg:grid  gap-x-4 h-full w-full lg:grid-cols-10'>
        <ChatUser />
        {
          id?.length > 0 ? (<ChatView id={id}/>) : (<></>)
        }
        
    </div>
  )
}

export default Home