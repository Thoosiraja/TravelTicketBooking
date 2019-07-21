import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Redirect} from 'react-router-dom';
import AddBus from "./Addbus/AddBus";
import DisplayDetails from './DisplayDetails/DisplayDetails';
import Signup from './Signup/Signup';
import Alldetails from './Alldetails/Alldetails';
// import DisplayDetails1 from './DisplayDetails/DisplayDetails1';
import Admin from '../Admin/Admin';
import Localtaskbar from './LocalTaskbar/Localtaskbar';
import LocalTaskbar1 from './LocalTaskbar/LocalTaskbar1';
import Listbooking from './Listbooking/Listbooking';
import './Dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            user : this.props.location.state.user,
            name : this.props.location.state.name,
            email : this.props.location.state.email,
         }
    }
    render() { 
        return ( 
            <Router>
                <div className="task">
                        {(this.state.user === 'User')?<LocalTaskbar1 name={this.state.name} />:<Localtaskbar name={this.state.name}/>}
                </div>
            <div>   
                    <Redirect exact from = "/dashboard" to = "/dashboard/display" />
                    <Route path = "/dashboard/addbus" exact component  = {() => <AddBus />}></Route>
                    <Route path = "/dashboard/display" exact component  = {() => <DisplayDetails email={this.state.email} />}></Route>
                    <Route path = "/dashboard/signup" exact component  = {() => <Signup />}></Route>
                    <Route path = "/dashboard/alldetails" exact component  = {() => <Alldetails />}></Route>
                    <Route path = "/admin" exact component  = {() => <Admin />}></Route>
                    <Route path = "/dashboard/listbooking" exact component  = {() => <Listbooking email={this.state.email}  />}></Route>
            </div>
            </Router>
        );
    }
}
 
export default Dashboard;
