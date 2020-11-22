import React from 'react'
import './style.css'
import defProfile from '../../profile.png'
import {FaCog} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Chanels = () => {
    return (
        <div className="chatBox">
            <div>
                <div className="servName">
                    <p style={{textAlign:"center"}}>GOMYCODE</p>
                </div>
                <div className="rooms">
                    <Link to="/general" className="link">general-chat</Link>
                    <Link to="/bots" className="link">bots</Link>
                    <Link to="/memes" className="link">memes</Link>
                    <Link to="/vip-room" className="link">vip-room</Link>
                </div>
            </div> 
           <div className="bottomUserSettings">
               <div className="profileSection">
                   <img src={defProfile} alt={"not found"} style={{width:"50px"}}/>
                   <div className="nameID">
                       <p>name</p>
                       <p>id</p>
                   </div>
               </div>
               <Link to="/settings" style={{textDecoration:"none"}}> <FaCog/> SETTINGS</Link>
            </div> 
        </div>
    )
}

export default Chanels
