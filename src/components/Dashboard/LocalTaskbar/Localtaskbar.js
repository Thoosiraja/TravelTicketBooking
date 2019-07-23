import React, { Component } from 'react';
import { Navbar, Nav,Button} from 'react-bootstrap';
import { Link ,BrowserRouter as Router,Redirect} from 'react-router-dom';
import './Localtaskbar.css';
class Localtaskbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show : false,
            name : this.props.name,
        }
    }
    click =() =>{
        // this.setState({show:true})
        window.location.href ='/';
    }
    render() {
        // if(this.state.show)
        // {
        //     return <Redirect to="/admin" />
        // }
        // else{
        return (
            <div className="main">
                <Navbar bg="dark" fixedTop>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Link to='/dashboard/addbus'>
                                <div><Button varint="secondary">ADD BUS</Button></div>
                            </Link>
                            <Link to='/dashboard/display'>
                                <div><Button varint="secondary">DISPLAY DETAILS</Button></div>
                            </Link>
                            <Link to='/dashboard/editbus'>
                                <div><Button varint="secondary">EDIT DETAILS</Button></div>
                            </Link>
                            <Link to='/dashboard/alldetails'>
                                <div><Button varint="secondary">ALL BOOKINGS</Button></div>
                            </Link>
                            <Link to='/dashboard/signup'>
                                <div><Button varint="secondary">ADD NEW ADMIN</Button></div>
                            </Link>
                                <div><Button varint="secondary" onClick={this.click}>LOG OUT [{this.state.name}]</Button></div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar> 
            </div>
        );
        // }
    }
}

export default Localtaskbar;
