import React, { use } from 'react'


interface Message {
    id:number;
    co
}

function WebSocket() {
    const [messages, setMessages] = React.useState([])

 useEffect(() => {
    const socket = new WebSocket("")

    socket.onopen = (event) => {
        console.log('webSocket connected')
        socket.send(JSON.parse(event.data))
        setMessages(prev => [...prev,data])
    }

    socket.onclose = () => {
        console.log("websocket disconnected")
    } 
    return () => {
        socket.close()
    }
 },[])

  return (
    <div>WebSocket Message</div>
  )
}

export default WebSocket