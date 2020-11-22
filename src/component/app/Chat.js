import React,{useState} from 'react'
import './style.css'
import { MdSend } from "react-icons/md";

const Chat = (props,{addMessage}) => {
    const [msg,setMsg] = useState({
        message:"",
        id:""
    });
    const handleMsgInputChange = (e) => {
        setMsg({...msg,message: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (msg.message.trim()){
            
            setMsg({...msg,message:''});
        }
    }
    return (
        <div className="chatBody">
            <div className="chanelDesc">
                <p>{props.Cname}</p>
            </div>
            <div></div>
            <form className="msg" onSubmit={handleSubmit} >
                <input type="text" placeholder="send message" style={{marginLeft:"20px"}} onChange={handleMsgInputChange} value={msg.message} name='message' />
                <button style={{marginRight:"20px",backgroundColor:'#2f2f2f',color:"white"}} type="submit" ><MdSend/></button>
            </form>
        </div>
    )
}

export default Chat
