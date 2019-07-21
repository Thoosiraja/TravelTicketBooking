import React, { Component } from 'react';
import { Navbar, Nav,Button} from 'react-bootstrap';
import { Link ,BrowserRouter as Router} from 'react-router-dom';
import './Taskbar.css';
class Taskbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="main">
                <Navbar bg="dark" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link to='/'>
                                <div><Button varint="secondary">HOME</Button></div>
                            </Link>
                            {/* <Link to='/login'>
                                <div><Button varint="secondary">USER LOGIN</Button></div>
                            </Link> */}
                            <Link to='/signup'>
                                <div><Button varint="secondary">USER SIGN UP</Button></div>
                            </Link>
                            <Link to='/admin'>
                                <div><Button varint="secondary"> LOGIN</Button></div>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
             
            </div>
        );
    }
}

export default Taskbar;
