import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth,provider } from './firebase';

function Login() {
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .catch((error)=>{
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.redd.it/25nh8isv2rfz.jpg" alt="login-logo"/>
                <h1>iMessage</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )            
}

export default Login
