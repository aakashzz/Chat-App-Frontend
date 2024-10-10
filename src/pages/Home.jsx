import React from 'react'
import ContactList from '../components/ContactList'
import ChatView from '../components/ChatView'

function Home() {
  return (
    <div className=' grid grid-cols-10 gap-x-4 h-[90vh]'>
        <ContactList />
        <ChatView />
    </div>
  )
}

export default Home