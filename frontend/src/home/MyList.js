import React from 'react';
import { Link } from 'react-router-dom';

function MyList(props) {
    return (
        <div className="bucketListPage">
            <h1 className="bucketListHeader">Bucket List</h1>
            <h2 className="bucketHeader">My Bucket List</h2>
            <div className="bucketlist">

            </div>

        </div>
    );
}

export default MyList;