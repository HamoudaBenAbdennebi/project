import React from 'react'
import Member from './Member'
import ALI from '../../ali.jpg'
import TRAX from '../../trax.png'
import YOUSSEF from '../../youssef.png'
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";
const OnlinePage = () => {
    return (
        <div className="pageOnline" style={{display:"flex"}}>
            <Link to="/general" style={{width:"5%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white",opacity:"0.7",fontSize:"30px",color:'black'}}><IoIosArrowBack/></Link>
            <div style={{width:"95%"}}>
            <Member src={ALI} name="ALI SAMI"/>
            <Member src={TRAX} name="TRAX"/>
            <Member src={YOUSSEF} name="Sora そら"/>
            </div>
        </div>
    )
}

export default OnlinePage
