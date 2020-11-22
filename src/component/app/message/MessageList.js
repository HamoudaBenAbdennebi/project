import React from 'react'
import message from './Message'

const MessageList = ({msgs}) => {
    console.log(msgs)
    return (
        <div>
            {msgs.map(msg => (
                <message msg={msg}/>
            ) )}
        </div>
    )
}

export default MessageList
