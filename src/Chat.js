import React from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';


function Chat() {
  return (
    <div className="chat">
        <ChatHeader />

        <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        </div>

        <div className="chat__input">
            <AddCircleIcon fontsize="large" />
            <form>
                <input placeholder={`Message #TESTCHANNEL`} />
                <button className="chat__inputButton" type="submit">Send Message</button>
            </form>

            <div className="chat__inputIcons">
                <CardGiftcardIcon />
                <GifIcon />
                <EmojiEmotionsIcon fontSize="large" />
            </div>
        </div>
    </div>
  )
}

export default Chat;