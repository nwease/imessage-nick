import React, {forwardRef} from 'react';
import '../css/ChatMessage.css';
import {Avatar} from '@material-ui/core';
import {selectUser} from '../features/userSlice';
import {useSelector} from 'react-redux';

const ChatMessage = forwardRef(({id, contents: {timestamp, email, message, photo, uid}}, ref) => {

    const user = useSelector(selectUser);

    return (
        <div
            ref={ref}
            className={`chatMessage ${user.email === email && 'chatMessage__sender'}`}
        >

            <Avatar className='chatMessage__photo' src={photo} />

            <p>
                {message}
            </p>

            <small>
                {new Date(timestamp?.toDate()).toLocaleString()}
            </small>
        </div>
    );
})

export default ChatMessage;