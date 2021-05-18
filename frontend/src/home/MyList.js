import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./myList.css";
import Dropdown from 'react-bootstrap/Dropdown'
import axios from 'axios';
import actions from '../api';
import serverUrl from '../api'
import Adventure from '../pictures/adventure-icon.png'
import Entertainment from '../pictures/entertainment-icon.png'
import Travel from '../pictures/travel-icon.png'
import Dining from '../pictures/dining-icon.png'
import Miscellaneous from '../pictures/misc-icon.png'
import Form from "react-bootstrap/Form"


function MyList(props) {
    const [button, setButton] = useState('Choose Category')
    const [item, setItem] = useState('')
    const [items, setItems] = useState([])
    const handleChoice = (e) => {
        setButton(e.target.outerText)
    }

    const handleItem = (e) => {
        console.log(e.target.value)
        setItem(e.target.value)
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

    const checkBox = (e) => {
        return <Form>
            {['checkbox'].map((type) => (
                <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input type={type} isValid />

                    </Form.Check>
                </div>
            ))}
        </Form>
    }

    const displayItems = (e) => {
        return items.map(thing => {
            return (
                <div className="bucketLine">
                    <div className="bucketPic">
                        {logo(thing)}
                    </div>
                    <div className="bucketItem">
                        {thing.item}
                    </div>
                    <div className="bucketCheckBox">
                        {checkBox()}
                    </div>
                </div>
            )
        })
    }


    useEffect(() => {
        actions.getUser().then(res => setItems(res.data.items))

    }, [])

    // useEffect(() => {
    //     console.log(`fetch data for user ${props.match.params.userid}`)
    //     axios.get("http://localhost:5000/api/getUser")
    //         .then((res) => {
    //             console.log(res.data)
    //             setItems(res.data)
    //         })
    // }, [])

    // const showItems = () => {
    //     return items.map((listitem)=> (
    //         console.log(listitem)
    //     ))
    // }


    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post(`http://localhost:5000/api/bucketList`, { button, item, user: props.match.params.userid })
        console.log('FE response', res);
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
                    <form onSubmit={handleSubmit}>
                        <div className="inputTitle">
                            <input onChange={handleItem} type="text" placeholder="Add bucket list item here" />

                        </div>
                        <div className="inputType">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {button}
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    <Dropdown.Item onClick={handleChoice}>Adventure</Dropdown.Item>
                                    <Dropdown.Item onClick={handleChoice}>Entertainment</Dropdown.Item>
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
                    <div className="bucketContainer">
                        {displayItems()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyList