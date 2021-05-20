import React from 'react';
import {Link} from "react-router-dom";
import "./MyFeed.css";

function MyFeed(props) {
    return (
        <div className="myFeedPage">
        <Link to="/bucketlist/:userid"><h3>My List</h3></Link>
            <h4>News Feed</h4> 
            <hr className='hrtag' />
            <div className="feedContainer">
            FEED POSTS
            </div>
        </div>
    );
}

export default MyFeed;