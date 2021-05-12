import React from 'react';
import "./signup.css";
import { useState, useContext } from 'react';
import actions from '../api';
import TheContext from '../TheContext';

function Signup(props) {

    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    let { setUser } = useContext(TheContext);

    const submitSignup = (e) => {
        e.preventDefault()
        actions.signUp({ user, pass }).then(user => {
            setUser(user)
        })
    }


    return (
        <div className="signupPage">
            <h1 id='title'>BucketList</h1>
            <div className="signupContainer">
                <div className="signupForm">
                    <h1>Sign Up</h1>

                    <p>Sign up to create a bucket list and start living a life that inspires you!</p>
                    <form onSubmit={submitSignup}>
                        <input type="text" placeholder="Username" onChange={((e) => setUsername(e.target.value))}></input><br></br>
                        <input type="text" placeholder="Password" onChange={((e) => setPassword(e.target.value))}></input><br></br>
                        <button>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;