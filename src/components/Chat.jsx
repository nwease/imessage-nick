import React, {useState} from 'react';
import '../css/Chat.css';
import MicNoneIcon from '@material-ui/icons/MicNone';
import IconButton from '@material-ui/core/IconButton';
import ChatMessage from './ChatMessage';
import {useSelector} from "react-redux";
import {selectChatName} from '../features/chatSlice';

function Chat() {

    const [input, setInput] = useState('');
    // const [messages, setMessages] = useState([]);
    const chatName = useSelector(selectChatName);

    const sendMessage = (e) => {
        e.preventDefault();

        // Firebase

        setInput('');
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                <h4>
                    To:

                    <span className='chat__name'>
                        {chatName}
                    </span>
                </h4>

                <strong>
                    Details
                </strong>
            </div>

            <div className='chat__messages'>
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
                <ChatMessage />
            </div>

            <div className='chat__input'>
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder='iMessage' type='text'
                    />

                    <button onClick={sendMessage}>
                        Send Message
                    </button>
                </form>

                <IconButton>
                    <MicNoneIcon className='chat__mic' />
                </IconButton>
            </div>
        </div>
    );
}

export default Chat;