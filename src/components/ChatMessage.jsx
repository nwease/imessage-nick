import React from 'react';
import '../css/ChatMessage.css';
import {Avatar} from '@material-ui/core';

function ChatMessage({id, contents}) {
    return (
        <div className='chatMessage'>
            <Avatar />

            <p>
                CHAT MESSAGE
            </p>

            <small>
                Timestamp
            </small>
        </div>
    );
}

export default ChatMessage;