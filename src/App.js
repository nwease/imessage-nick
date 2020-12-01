import React from 'react';
import './App.css';
import Message from './components/Message';
import {useSelector} from 'react-redux';
import {selectUser} from './features/userSlice';
import Login from './components/Login';

function App() {

    const user = useSelector(selectUser);

    return (
        <div className='app'>
            {
                user ? (
                    <Message/>
                ) : <Login />
            }
        </div>
    );
}

export default App;
