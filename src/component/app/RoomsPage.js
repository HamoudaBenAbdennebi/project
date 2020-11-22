import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
const RoomsPage = () => {
    return (
        <div className="roomsPage">
            <Link to="/general" className="link">general-chat</Link>
            <Link to="/bots" className="link">bots</Link>
            <Link to="/memes" className="link">memes</Link>
            <Link to="/vip-room" className="link">vip-room</Link>
        </div>
    )
}

export default RoomsPage
