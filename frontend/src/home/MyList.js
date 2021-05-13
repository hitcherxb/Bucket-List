import React from 'react';
import { Link } from 'react-router-dom';
import "./myList.css"

function MyList(props) {
    return (
        <div className="bucketListPage">

            <h1 className="bucketListHeader">BucketList</h1>

            <div className="bucketlistContainer">
                <h3 className="bucketHeader">My Bucket List</h3>

                <div className="bucketlist">
                    <div className="inputTitle">

                    </div>
                    <div className="inputType">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Choose Category
                        </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Adventure</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Entertainment </Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Travel</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Dining</Dropdown.Item>
                                <Dropdown.Item href="#/action-5">Miscellaneous</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="inputAdd">

                    </div>

                </div>
            </div>
        </div>
    );
}

export default MyList;