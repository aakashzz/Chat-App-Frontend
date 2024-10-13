import React from 'react'
import ChatView from '../components/ChatView'
import ChatUser from '../components/ChatUser'

function Home() {
  return (
    <div className=' grid grid-cols-10 gap-x-4 h-[90vh]'>
        <ChatUser />
        {/* <ChatView /> */}
    </div>
  )
}

export default Home