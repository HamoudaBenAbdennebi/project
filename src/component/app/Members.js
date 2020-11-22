import React from 'react'
import Member from './Member'
import defProfile from '../../profile.png'
import ALI from '../../ali.jpg'
import TRAX from '../../trax.png'
import YOUSSEF from '../../youssef.png'
const Members = () => {
    return (
        <div className="members">
            <div className="onlineMembers">
                <p style={{textAlign:"center"}}>ONLINE MEMBERS</p>
            </div>
            <Member src={ALI} name="ALI SAMI"/>
            <Member src={TRAX} name="TRAX"/>
            <Member src={YOUSSEF} name="Sora そら"/>
        </div>
    )
}

export default Members
