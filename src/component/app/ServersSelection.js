import React from 'react'
import './style.css'
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';
import GMC from '../../gmc.jpg'
const ServersSelection = () => {
    return (
        <div className="seversSelection">
            <div className="settingsHeader">
            <h4 style={{marginLeft:"20px",color:"white"}}>Select a serveur</h4>
            <Link to="/general" style={{fontSize:"50px",color:"#fff",marginRight:"20px"}}><AiFillCloseCircle/></Link>
            </div>
            <div className="serveurs" style={{marginLeft:"25px"}}>
                <div className="servCard">
                    <img src={GMC} alt="serveurImage"/>
                    <div>
                        <h3>GOMYCODE</h3>
                        <Link to="/general" style={{color:"red",textDecoration:"none",border:"2px solid red",padding:"2%",marginTop:"5px"}} >connect</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServersSelection
