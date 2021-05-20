import React, { useEffect, useState, useContext } from 'react';
import { Link } from "react-router-dom";
import "./MyFeed.css";
import actions from "../api";
import TheContext from '../TheContext'
import Adventure from '../pictures/AdventureFeed.jpeg'
import Entertainment from '../pictures/EntertainmentFeed.jpeg'
import Travel from '../pictures/TravelFeed.jpeg'
import Dining from '../pictures/DiningFeed.jpeg'
import Miscellaneous from '../pictures/MiscellaneousFeed.webp'

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
                    <div className="feedImage">{logo(e)}</div>
                    <div className="feedWords">
                        <div className="feedTitle">{e.item}</div>
                        <div className="feedDescription">{e.description}</div>
                    </div>
                </div >

            )
        }
        )
    }

    const logo = (thing) => {
        switch (true) {
            case (thing.button == 'Adventure'):

                return <img src={Adventure} />

            case (thing.button == 'Entertainment'):

                return <img src={Entertainment} />

            case (thing.button == 'Travel'):

                return <img src={Travel} />

            case (thing.button == 'Dining'):

                return <img src={Dining} />

            case (thing.button == 'Miscellaneous'):

                return <img src={Miscellaneous} />


        }
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