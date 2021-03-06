import React,{useState,useEffect} from 'react'
import Chanels from '../Chanels'
import Chat from '../Chat'
import Header from '../Header'
import OnlineMembers from '../layout/OnlineMembers'
import Rooms from '../layout/Rooms'
import Members from '../Members'
import Servers from '../Servers'
const Vip = () => {
    const [msgs,setMsgs] = useState([]);
    const addMessage =(msg) =>{
        setMsgs([msg,...msgs]);
    }
    return (
        <div>
            <div>
            <div className="app">
            <Header/>
            <div className="secPart">
                <Servers/>
                <Chanels/>
                <Rooms />
                <Chat Cname="vip-room" addMessage={addMessage}/>
                <OnlineMembers />
                <Members />
            </div>
        </div>
        </div>
        </div>
    )
}

export default Vip
