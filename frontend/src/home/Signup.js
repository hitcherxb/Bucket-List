import React from 'react';

function Signup(props) {
    return (
        <div className="signupPage">
        <h1 id='title'>BucketList</h1>
        <div className="signupForm">
        <h1>Sign Up</h1>
        <hr></hr>
        <p>Sign up to create a bucket list and start living a life that inspires you!</p>
        <form>
            <input type="text"></input><br></br>
            <input type="text"></input><br></br>
            <button>Sign Up</button>
        </form>
        </div>
        
        </div>
    );
}

export default Signup;