import React, { useEffect, useState } from 'react'
import './Chat.css';
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifIcon from '@mui/icons-material/Gif';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { selectUser } from './features/userSlice';
import db from './firebase';
import firebase from 'firebase';


function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]); 

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
      .doc(channelId)
      .collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
      setMessages(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, [channelId]);

  const sendMessage = (e) => {
    e.preventDefault(); 

    db.collection('channels').doc(channelId).collection('messages')
    .add({
     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
     message: input,
     user: user
    });

    setInput("");
  };
 
  return (
    <div className="chat">
      {/* //pass in the chat header name props */}
        <ChatHeader channelName={channelName} />

        <div className="chat__messages">
          {messages.map((message) => (
            // Pass in props to message component
            <Message
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
            />
            ))} 
        </div>

        <div className="chat__input">
            <AddCircleIcon fontsize="large" />
            <form>
                <input
                value={input}
                disabled={!channelId}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName}`}
                 />
                <button
                disabled={!channelId}
                className="chat__inputButton"
                type="submit"
                onClick={sendMessage}
                >
                Send Message</button>
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