import React from 'react'
import './style.css'
const Member = (props) => {
    return (
        <div className="memberCard">
            <img src={props.src} alt="member" />
            <p>{props.name}</p>
        </div>
    )
}

export default Member
