import React from 'react';
import "./signup.css";
import { useState, useContext } from 'react';
import actions from '../api';
import TheContext from '../TheContext';
import {Link} from 'react-router-dom';

function Signup(props) {

    const [user, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [error, setError] = useState("");
    let { setUser } = useContext(TheContext);

    const submitSignup = (e) => {
        e.preventDefault()
        actions.signUp({ user, pass }).then(data => {
            console.log(data)
            if(data.user){
            setUser(data.user)
            props.history.push(`/bucketlist/${data.user._id}`)
        } else {
            setError(data.error)
        }
        })
    }


    return (
        <div className="signupPage">
        <Link to="/"><h1 id='title'>BucketList</h1></Link>
        <div className="signupContainer">
        
        <h2>Sign Up</h2>
        
        <p>Sign up to create a bucket list and start living a life that inspires you!</p>
        <form onSubmit={submitSignup}>
            <input type="text" placeholder= "Username" onChange={((e) => setUsername(e.target.value))}></input><br></br>
            <input type="text" placeholder="Password" onChange={((e) => setPassword(e.target.value))}></input><br></br>
            <button>Sign Up</button>
            {error}
        </form>
        
        </div>
        
        </div>
    );
}

export default Signup;