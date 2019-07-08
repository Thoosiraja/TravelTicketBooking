import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddBus from './AddBus';
import {Navbar,Nav} from 'react-bootstrap';
import Show from './Show'
import logo from './bg.jpg';
import './Get.css';
class nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    // click(){
    //     console.log("Hai");
    //    return <AddBus />;
    //  
    render() {
        return (
            <div className="bg">
            {/* <img src={logo} alt="Logo" height="100%" width="100%"/> */}
            <p>On a bus, your eyes, ears, and pores are open absorbing in the variety, the wonder, and the magic of the city.
                It's a wonderful way to get to know the city.</p>
            </div>
        );
    }
}

export default nav;