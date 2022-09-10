import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import React from 'react'
import './Login.css'
 

function Login() {
    const signIn = () => {
        //do clever login
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }; 

  return (
    <div className="login">
    <div className="login__logo">
        <img src ="https://cdn.worldvectorlogo.com/logos/discord-logo-color-wordmark-1.svg"
        alt="Discord logo" width="60%" align="center" />
        </div>

        <Button onClick={signIn}>Sign In</Button>
    </div>
  )
}

export default Login;