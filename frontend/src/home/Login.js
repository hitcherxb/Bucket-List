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
    const [error, setError] = useState('')
    let { setUser } = useContext(TheContext)

    const submitLogin = (e) => {
        e.preventDefault()
        actions.logIn({ user, pass }).then(data => {
            console.log(data)
            if (data.user) {
                setUser(data.user)
                props.history.push(`/bucketlist/${data.user._id}`)
            } else {
                setError(data.error)
            }
        })
    }




    return (
        <div className='loginPage'>
            <Link to='/login' />
            <Link to="/"><h1 id='title'>BucketList</h1></Link>
            <div className='box'>
                <h1>Login Here</h1>

                <p>Login to your bucketlist!</p>
                <form onSubmit={submitLogin}>
                    <input onChange={((e) => setUsername(e.target.value))} type='text' placeholder='Username' />
                    <input onChange={((e) => setPassword(e.target.value))} type='password' placeholder='Password' />
                    <button>Login</button>
                    {error}
                    <Link to='/signup'><p>No account? Sign up here</p></Link>
                </form>
            </div>
        </div>
    );
}

export default Login;