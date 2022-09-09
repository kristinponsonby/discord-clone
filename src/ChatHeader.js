import React from 'react'
import './ChatHeader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

function ChatHeader() {
  return (
    <div className="chatHeader">
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">
                    #
                </span>
                Test Channel Name
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationIcon />
            <PeopleAltIcon />

            <div className="chatHeader__search">
                <input placeholder="Search" />
                <SearchIcon />
            </div>
            <SendIcon />
            <HelpIcon />
        </div>
    </div>
  )
}

export default ChatHeader