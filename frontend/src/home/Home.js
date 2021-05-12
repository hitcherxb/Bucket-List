import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'


function Home(props) {

    return (



        <div className="homePage">

            <h1 className="homeHeader">Bucket List</h1>

            <h2 className="quote">Design a life you are inspired to live</h2>

            <div className="loginButton">
                <Link to='/login'><h2>Log In</h2></Link>
            </div>
        </div >
    );
}

export default Home;