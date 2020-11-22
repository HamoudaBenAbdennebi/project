import React from 'react'
import './settings.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
const Settings = () => {
    return (
        <div className="settingsPage">
            <div className="settingsHeader">
            <h1 style={{marginLeft:"20px",color:"white"}}>Settings</h1>
            <Link to="/general" style={{fontSize:"50px",color:"#fff",marginRight:"20px"}}><AiFillCloseCircle/></Link>
            </div>
            <div className="form-settings-container">
            <form className="form-settings">
                <input type="text" placeholder="gamer tag" />
                <br />
                <input type="email" placeholder="email" />
                <br />
                <input type="password" placeholder="password" />
                <br />
                <input type="text" placeholder="profile image" />
                <br />
                <button type="submit" style={{backgroundColor:"#fff",color:"black"}}>CHANGE</button>
            </form>
            </div>
            <div></div>
        </div>
    )
}

export default Settings
