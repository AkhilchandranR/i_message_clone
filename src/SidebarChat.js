import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

function SidebarChat() {
    return (
        <div className="sidebarchat">
            <Avatar/>
            <div className="sidebarchat__info">
                <h3>channel name</h3>
                <p>last message....</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChat
