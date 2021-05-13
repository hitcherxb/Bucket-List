import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./myList.css";
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';

function MyList(props) {
    const [button, setButton] = useState('Choose Place');
    const [listItem, setListItem] = useState("");
    const [listItems, setListItems] = useState([]);

    const handleChoice = (props) => {
        setButton(props.target.outerText)
    }

    useEffect(() => {
        console.log(`fetch data for user ${props.match.params.userid}`)
    }, [])

    function handleChange(e) {
        setListItem(e.target.value)
    }

    return (
        <div className="bucketListPage">

            <h1 className="bucketListHeader">BucketList</h1>
            
            <div className="bucketlistContainer">
                <div className="mybucketlistHeader">
                    <h3 className="bucketHeader">My Bucket List</h3>
                    <hr className='hrtag' />
                </div>
                <div className="bucketlist">
                    <form>
                        <div className="inputTitle">
                            <input type="text" onChange={handleChange} placeholder="Add bucket list item e.g. See the Statue of Liberty!" />

                        </div>
                        <div className="inputType">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {button}
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item onClick={handleChoice}>Adventure</Dropdown.Item>
                                    <Dropdown.Item onClick={handleChoice}>Entertainment </Dropdown.Item>
                                    <Dropdown.Item onClick={handleChoice}>Travel</Dropdown.Item>
                                    <Dropdown.Item onClick={handleChoice}>Dining</Dropdown.Item>
                                    <Dropdown.Item onClick={handleChoice}>Miscellaneous</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="inputAdd">
                            <button>+</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default MyList