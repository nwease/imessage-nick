import React from 'react';
import '../css/SidebarChat.css';
import {Avatar} from '@material-ui/core';

function SidebarChat() {
    return (
        <div className='sidebarChat'>
            <Avatar />

            <div className='sidebarChat__info'>
                <h3>
                    Channel Name
                </h3>

                <p>
                    Last Message Sent...
                </p>

                <small>
                    Timestamp
                </small>
            </div>
        </div>
    );
}

export default SidebarChat;