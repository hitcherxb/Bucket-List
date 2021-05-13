import React from 'react';
import { Link } from 'react-router-dom';
import "./myList.css";
import Dropdown from 'react-bootstrap/Dropdown'

function MyList(props) {


    function display() {
        let obj = document.getElementById("selectNow");
        document.write(obj.options[obj.selectedIndex].text);
    }


    return (
        <div className="bucketListPage">

            <h1 className="bucketListHeader">BucketList</h1>

            <div className="bucketlistContainer">
                <div className="mybucketlistHeader">
                    <h3 className="bucketHeader">My Bucket List</h3>
                </div>
                <div className="bucketlist">
                    <form>
                        <div className="inputTitle">
                            <input type="text" placeholder="Add Bucket List Item" />
                        </div>
                        <div className="inputType">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Choose Category
                        </Dropdown.Toggle>

                                <Dropdown.Menu show>
                                    <Dropdown.Item eventkey="1">Adventure</Dropdown.Item>
                                    <Dropdown.Item eventkey="2">Entertainment </Dropdown.Item>
                                    <Dropdown.Item eventkey="3">Travel</Dropdown.Item>
                                    <Dropdown.Item eventkey="4">Dining</Dropdown.Item>
                                    <Dropdown.Item eventkey="5">Miscellaneous</Dropdown.Item>
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

export default MyList;