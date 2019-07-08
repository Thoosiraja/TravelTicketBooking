import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav1 from './components/Nav';
import AddBus from './components/AddBus'
import Show from './components/Show';
import {Navbar,Nav} from 'react-bootstrap';
import Get from './components/Get';
import {BrowserRouter as Router ,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand ><h1>BUS</h1></Navbar.Brand>
        <Nav className="mr-auto">            
            <Nav.Link href="/AddBus">ADD BUS</Nav.Link>
            <Nav.Link href="/Get">DISPLAY</Nav.Link>
        <hr />    
      </Nav>
      </Navbar> 
      <Route exact path="/" component={nave} />
      <Route path="/AddBus" component={AddBuse} />
      <Route path="/Get" component={Showe} />        
    </Router> 
    {/* <Get /> */}
    </div>
  );
}
function nave() {
  return (
      <div>
          <Nav1 />
      </div>
  );
}

function AddBuse() {
  return (
      <div>
          <AddBus />
      </div>
  );
}
function Showe() {
  return (
      <div>
          <Get />
      </div>
  );
}
export default App;