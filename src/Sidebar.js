import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import Avatar from '@mui/material/Avatar';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar() {
  return  (
   <div className="sidebar">
    <div className="sidebar_top">
        <h3>Kristin Ponsonby</h3>
        <ExpandMoreIcon />
    </div>

    <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
                <ExpandMoreIcon />
                <h4>Text Channels</h4>
            </div>

            <AddIcon className="sidebar__addChannel" />
        </div>
    <div className="sidebar__channelsList">
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
    </div>
    </div>

    <div className="sidebar__voice">
        <SignalCellularAltIcon 
        className="sidebar__voiceIcon"
        fontSize="large"
        />
        <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
            <InfoIcon />
            <CallIcon />
        </div>
      </div>

      <div className="sidebar__profile">
          <Avatar src="https://gravatar.com/avatar/1c8e8a6e8d1fe52b782b280909abeb38?s=400&d=robohash&r=x" />
          <div className="sidebar__profileInfo">
              <h3>@kristinponsonby</h3>
              <p>#thisIsMyId</p>
          </div>

          <div className="sidebar__profileIcons">
              <MicIcon />
              <HeadsetIcon />
              <SettingsIcon />
          </div>
      </div>
   </div>
  );
}

export default Sidebar;  