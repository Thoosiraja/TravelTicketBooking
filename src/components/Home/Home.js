import React, { Component } from 'react';
import Taskbar from '../Taskbar/Taskbar';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Taskbar />
            <div className="bg">
            <p>On a bus, your eyes, ears, and pores are open absorbing in the variety, the wonder, and the magic of the city.
                It's a wonderful way to get to know the city.</p>
            </div>
            </div>
        );
    }
}

export default Home;