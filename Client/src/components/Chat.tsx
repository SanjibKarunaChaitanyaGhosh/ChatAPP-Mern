import axios from 'axios';
import { useEffect, useState } from 'react'

const Chat = () => {
const [chats, setChats] = useState([])

    const fetchChats =async () => {
      const response = await axios.get("/api/chat")
      
      // console.log(response.data);
      setChats(response.data)
    }

    useEffect(() => {
      
        fetchChats();
      
    }, [])
    
  return (
    <div>
      {chats.map((val, idx) => (
        <div key={idx}>{val.chatName}</div>
      ))}
    </div>
  )
}

export default Chat