import { Link } from "react-router-dom";
import React from 'react';
// import '../Login.css'

function Login(props) {





    return (
        <div id='loginPage'>

            <Link to='/login' />
            <form className='flex'>
                <div>
                    <h1>Login</h1>
                </div>
                <div>
                    <input type='text' placeholder='Username' />
                </div>
                <div>
                    <input type='text' placeholder='Password' />
                </div>
                <Link to='/signup'><h2>Sign up here!</h2></Link>

            </form>




        </div>
    );
}

export default Login;