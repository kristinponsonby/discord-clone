import React from 'react'
import './Message.css';
import { Avatar } from '@mui/material';

function Message() {
  return (
    <div className="message">
        <Avatar />
        <div className="message__info">
            <h4>
                My user name is @kristinponsonby!
                <span className="message__timestamp">This is the time!
                </span>
            </h4>
        </div>
    </div>
  )
}

export default Message