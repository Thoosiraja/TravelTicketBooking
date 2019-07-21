import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
// import Display1 from './components/Dashboard/DisplayDetails/DisplayDetails1';
import Admin from './components/Admin/Admin';
import Signup from './components/Signup/Signup';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <Router> 
        <div className = "App">
              <Route path = "/" exact component = {() => <Home/>}></Route>
              <Route path = "/signup" exact component = {() => <Signup/>}></Route>
              <Route path = "/admin" exact component = {() => <Admin/>}></Route>
              <Route path = "/dashboard" exact component = {Dashboard}></Route>
              {/* <Route path = "/dashboard/display1" exact component = {() => <Display1 />}></Route> */}
        </div>
        </Router>
     )
  }
}
export default App;
