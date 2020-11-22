import React from 'react'
import './style.css'
import logo from '../../logo.png'
const Header = () => {
    return (
        <div className="header">
            <h2><img src={logo} alt="logo" style={{width:'30px'}}/>VOIDER</h2>
            <div style={{display:"flex",alignItems:"center"}}>
            </div>
        </div>
    )
}

export default Header
