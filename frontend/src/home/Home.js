import React from 'react';
import { Link } from 'react-router-dom';


function Home(props) {
    return (
        <div className="homePage">


            <h1 className="quote">Design a life you are inspired to live</h1>

            <div className="loginButton">
                <Link to='/login'><h2>Log In</h2></Link>
            </div>
        </div>
    );
}

export default Home;