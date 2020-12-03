import React, {useState} from 'react';
import '../css/SidebarChat.css';
import {Avatar} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {setChat} from '../features/chatSlice';

function SidebarChat({id, chatName}) {

    const dispatch = useDispatch();
    const [chatInfo, setChatInfo] = useState([]);

    return (
        <div className='sidebarChat' onClick={() => dispatch(
            setChat({
                chatId: id,
                chatName: chatName,
            })
        )}>
            <Avatar />

            <div className='sidebarChat__info'>
                <h3>
                    {chatName}
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