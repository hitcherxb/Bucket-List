import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./MyFeed.css";
import actions from "../api";
import TheContext from '../TheContext';
import AdventureFeed from "../pictures/AdventureFeed.jpeg"

function MyFeed(props) {

    const [info, setInfo] = useState([])
    const [user, setUser] = useState('')


    useEffect(() => {
        actions.getUser().then(res => {
            console.log(res.data)
            setInfo(res.data.items)
            setUser(res.data._id)
        })
    }, [])

    function displayFeed() {
        return info.map((e) => {
            return (
                <div className="feedSection">
                    <div><img src={AdventureFeed}></img></div>
                    <div className="feedTitle">{e.item}</div>
                    <div className="feedDescription">{e.description}</div>
                </div >
            )
        })
    }


    return (
        <div className="myFeedPage">
            <div className="myFeedHeader">
                <h1>BucketList</h1>
                <Link to={`/bucketlist/${user}`}><h3>My List</h3></Link>
            </div>
            <h4>My Feed</h4>
            <hr className='hrtag' />
            <div className="feedContainer">

                {displayFeed()}
            </div>
        </div>
    );
}

export default MyFeed;