import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { createSocketConnection } from '../utils/socket';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Base_Url } from '../constants/constants';

const Chat = () => {

  const {targetUserId} = useParams();
  const [messages,setMessages] = useState([])
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector(store => store.user);
  console.log(user);
  //console.log(user?.data?.firstName + " " + user?.data?.lastName);
  const fullName = user?.data?.firstName + " " + user?.data?.lastName;
  //console.log(user.data.firstName);
  const userId = user?.data?._id
  const userName = user?.data?.firstName;

  //console.log(targetUserId);

  const fetchChat = async ()=> {
    const chat = await axios.get(Base_Url + "chat/" + targetUserId , {withCredentials : true} );
   // console.log(chat.data.messages);
    const chatMessages = chat?.data?.messages.map((msg)=> {
      return {
        userName: msg?.senderId?.lastName ? `${msg?.senderId?.firstName} ${msg?.senderId?.lastName}` : msg?.senderId?.firstName,

        text : msg.text
      }
    })
    setMessages(chatMessages);
  }

  useEffect(()=>{
    fetchChat()
  },[])

  useEffect(()=>{
    if (!userId) return; 
    const socket = createSocketConnection();
    socket.emit("joinChat",{userId,targetUserId})
    //console.log(userId,targetUserId)

    socket.on("messageReceived",({userName,text}) => {
        console.log(userName + " : " + text);
        setMessages((messages)=>[...messages, {userName,text}])
    })

    return ()=>{
      socket.disconnect();
    }
  },[])

  const sendNewMessage = ()=>{
    const socket = createSocketConnection();
    socket.emit("sendMessage",{userName,userId,targetUserId,text:newMessage})
    setNewMessage("");
  }

  return (
    <div className='w-1/2 mx-auto flex flex-col m-5 border border-gray-600 h-[70vh] '>
      <h1 className='p-5 border border-gray-600  text-2xl text-center'> Chat </h1>
      <div className='flex-1 overflow-scroll p-5 border border-gray-600'>
      {
        messages.map((msg,index)=>{
          console.log(msg.userName)
          return (
              <div key={index} className= {"chat " + (fullName === msg.userName ? "chat-end" : "chat-start")}>
                <div className="chat-header">
                 {msg.userName}
                </div>
              <div className="chat-bubble">{msg.text}</div>
              </div>
          )
        })} 
       </div>
      <div className='p-5 border-t border-gray-600 flex flex-items justify-center gap-3 '>
        {/* Input boxes */}
        <input type='text' className="p-2 flex-1 rounded-sm border border-gray-600" placeholder='Type a message' value={newMessage} onChange={(e)=>setNewMessage(e.target.value)} />
        <button onClick={()=>sendNewMessage("")} className='btn btn-primary'>Send</button>
        </div>
    </div>
  )
}

export default Chat