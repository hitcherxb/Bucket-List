import React, {useEffect, useState, useContext} from 'react';
import {Link} from "react-router-dom";
import "./MyFeed.css";
import actions from "../api";
import TheContext from '../TheContext'

function MyFeed(props) {

   const [info, setInfo] = useState([])
   const [user, setUser] = useState('')
   

   useEffect(() => {
        actions.getUser().then(res => {
        console.log(res.data)
        setInfo(res.data.items)
        setUser(res.data._id)
    })  
   },[])

   function displayFeed() {
      return info.map((e) => {
           return (
               <div>
                <div>{e.item}</div>
                <div>{e.description}</div>
               </div>
           )
       })
   }

   
    return (
        <div className="myFeedPage">
        <h1>BucketList</h1>
        <Link to={`/bucketlist/${user}`}><h3>My List</h3></Link>
            <h4>My Feed</h4> 
            <hr className='hrtag' />
            <div className="feedContainer">
            {displayFeed()}
            </div>
        </div>
    );
}

export default MyFeed;