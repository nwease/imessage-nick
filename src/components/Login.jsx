import React from 'react';
import '../css/Login.css';
import Button from '@material-ui/core/Button';
import {auth, provider} from '../firebase';

function Login() {

    const signIn = (e) => {
        e.preventDefault();
    }

    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src='https://maximac.se/wordpress/wp-content/uploads/2012/02/meddelanden.png'
                    alt='iMessage'
                />

                <h1>
                    iMessage
                </h1>
            </div>

            <Button onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;