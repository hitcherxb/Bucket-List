import { Link } from "react-router-dom";
import React from 'react';
import { useState, useContext } from 'react'
import TheContext from '../TheContext'
import './login.css'
import actions from '../api'
import axios from "axios";

function Login(props) {
    const [user, setUsername] = useState('')
    const [pass, setPassword] = useState('')
    let { setUser } = useContext(TheContext)

    const submitLogin = (e) => {
        e.preventDefault()
        actions.logIn({ user, pass }).then(user => {
            setUser(user)
        })
    }




    return (
        <div id='loginPage'>

            <Link to='/login' />
            <form id='flex' onSubmit={submitLogin}>
                <div className='box'>
                    <div>
                        <h1>Login</h1>
                    </div>
                    <div>
                        <input onChange={((e) => setUsername(e.target.value))} type='text' placeholder='Username' />
                    </div>
                    <div>
                        <input onChange={((e) => setPassword(e.target.value))} type='text' placeholder='Password' />
                    </div>
                    <button>Click me</button>
                    <Link to='/signup'><h2>Sign up here!</h2></Link>
                </div>

            </form>




        </div>
    );
}

export default Login;