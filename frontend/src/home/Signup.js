import React from 'react';
import "./signup.css";
import {useState} from 'react';
import actions from '../api';

function Signup(props) {

    const {user, setUser} = useState('');
    const {password, setPassword} = useState('');

    const submitSignup = (e) => {
        e.preventDefault()
        actions.logIn(user, password).then(user => {
            props.setUser(user)
        })
    }


    return (
        <div className="signupPage">
        <h1 id='title'>BucketList</h1>
        <div className="signupForm">
        <h1>Sign Up</h1>
        
        <p>Sign up to create a bucket list and start living a life that inspires you!</p>
        <form onSubmit={submitSignup}>
            <input type="text" placeholder= "Username"></input><br></br>
            <input type="text" placeholder="Password"></input><br></br>
            <button>Sign Up</button>
        </form>
        </div>
        
        </div>
    );
}

export default Signup;