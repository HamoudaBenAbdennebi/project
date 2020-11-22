import React,{useState,useEffect} from 'react'
import Chanels from '../Chanels'
import Chat from '../Chat'
import Header from '../Header'
import OnlineMembers from '../layout/OnlineMembers'
import Rooms from '../layout/Rooms'
import Members from '../Members'
import Servers from '../Servers'
import MessageList from '../message/MessageList';
const General = () => {
    const [msgs,setMsgs] = useState([]);
    const addMessage =(msg) =>{
        setMsgs([msg,...msgs]);
    }
    console.log(msgs)
    return (
        <div className="app">
            <Header/>
            <div className="secPart">
                <Servers/>
                <Chanels />
                <Rooms />
                <div style={{width:"100%"}}>
                <Chat Cname="general" addMessage={addMessage}/>
                <MessageList msgs={msgs} />
                </div>
                <OnlineMembers />
                <Members />
            </div>
        </div>
    )
}

export default General
