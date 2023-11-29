import React from 'react';
import './Login.css';
import googlelogo from './images/google-logo.png';

function Login(){

  return (
    <div className='Login-box'>
      <div className="sign-in-box">
        <img id='google-logo' src={googlelogo} alt="Google-logo" />
        <h1>Sign In</h1>
        <p>to continue in Youtube</p>
        <div className="email-area">
          <div>
          <input type='email & number' placeholder='Email or Phone Number' />
          </div>
          <button>Frogot Email?</button>
        </div>
      </div>
    </div>
  )
}

export default Login
