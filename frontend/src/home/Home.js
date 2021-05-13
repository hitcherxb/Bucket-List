import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './home.css'


function Home(props) {

    return (



        <div className="homePage">

            <h1 className="homeHeader">BucketList</h1>
            <div className="quoteContainer">
                <h2 className="quote">Create a life you are inspired to live</h2>
            </div>
            <div className="loginContainer">
                <div className="loginButton">
                    <Link to='/login'><h2>Let's Go</h2></Link>
                </div>
            </div>
        </div >
    );
}

export default Home;