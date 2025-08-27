import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const Chat = () => {

  const {targetUserId} = useParams();
  const [messages,setMessages] = useState([{text : "Hello world"}])
  return (
    <div className='w-1/2 mx-auto flex flex-col m-5 border border-gray-600 h-[70vh] '>
      <h1 className='p-5 border border-gray-600  text-2xl text-center'> Chat </h1>
      <div className='flex-1 overflow-scroll p-5 border border-gray-600'>
      {
        messages.map((map,index)=>{
          return (

              <div key={index} className="chat chat-start">
                <div className="chat-header">
                 Nitin
               <time className="text-xs opacity-50">2 hours ago</time>
                </div>
              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">Seen</div>
              </div>
          )
        })} 
       </div>
      <div className='p-5 border-t border-gray-600 flex flex-items justify-center gap-3 '>
        {/* Input boxes */}
        <input type='text' className="p-2 flex-1 rounded-sm border border-gray-600" placeholder='Type a message' />
        <button className='btn btn-primary'>Send</button>
        </div>
    </div>
  )
}

export default Chat