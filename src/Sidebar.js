import React from 'react'
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@material-ui/icons/Add';

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
    </div>
   </div>
  );
}

export default Sidebar;  