import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

function NavBar(props) {
    return (
        <div id='NavBar'>
            <DropdownButton
                menuAlign="right"
                title="Menu"
                id="dropdown-menu-align-right"
            >
                <Dropdown.Item eventKey="1">Home</Dropdown.Item>
                <Dropdown.Item eventKey="2">Posts</Dropdown.Item>
                <Dropdown.Item eventKey="3">Feed</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Settings</Dropdown.Item>
            </DropdownButton>
        </div>
    );
}

export default NavBar;