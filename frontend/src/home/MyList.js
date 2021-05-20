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
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'



function MyList(props) {
    const [button, setButton] = useState('Choose Category')
    const [item, setItem] = useState('')
    const [items, setItems] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [description, setDescription] = useState('')

    //Grabbing button Choice

    const handleChoice = (e) => {
        setButton(e.target.outerText)
    }

    //Grabbing input 

    const handleItem = (e) => {
        console.log(e.target.value)
        setItem(e.target.value)
    }

    // Changing the logo picture

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

    // CheckBox

    const checkBox = (e) => {
        return <Form>
            {['checkbox'].map((type) => (
                <div key={type} className="mb-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input onClick={() => {
                            setModalShow(true)
                            console.log('test')
                        }} type={type} isValid />

                    </Form.Check>
                </div>
            ))}
        </Form>
    }

    //Display bucketlist items

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

    //Pushing info

    const handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post(`http://localhost:5000/api/bucketList`, { button, item, user: props.match.params.userid })
    }

    // Grabbing info

    useEffect(() => {
        actions.getUser().then(res => setItems(res.data.items))
    }, [])



    const handleModalClose = () => {
        setModalShow(false)
    }



    const handleSubmitDescription = async (e) => {
        e.preventDefault()
        console.log(e)
        setDescription(e.target[0].value)
        let res = await axios.post(`http://localhost:5000/api/feed`, { description, user: props.match.params.userid })
        // console.log('FE response', res);
    }

    //Modal

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                show={modalShow}
                onHide={handleModalClose}
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        You Did It!
              </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmitDescription}>

                    <h4>Add a Description</h4>
                    <input type="text">

                    </input>

                    <button type='submit'>Add to Feed</button>

                </form>
            </Modal>
        );
    }








    return (
        <div className="bucketListPage">

            <h1 className="bucketListHeader">BucketList</h1>

            <div className="bucketlistContainer">
                <div className="mybucketlistHeader">

                    {/* Logo */}

                    <h3 className="bucketHeader">My Bucket List</h3>
                    <hr className='hrtag' />
                </div>
                <div className="bucketlist">
                    <form onSubmit={handleSubmit}>

                        {/* input */}

                        <div className="inputTitle">
                            <input onChange={handleItem} type="text" placeholder="Add bucket list item here" />

                        </div>

                        {/* Dropdown Options */}

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

                        {/* Add Button */}

                        <div className="inputAdd">
                            <button>+</button>
                        </div>
                    </form>
                    <div className="bucketContainer">

                        {/* Display bucketlist items */}

                        {displayItems()}

                    </div>
                </div>
            </div>
            <MyVerticallyCenteredModal />
        </div>
    );
}

export default MyList