import React, { Component } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { Link ,BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import './Signup.css';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            name : "",
            email : "",
            password : "",
            user : "Admin",
        }
        this.addfields = this.addfields.bind(this);
        this.click = this.click.bind(this);
    }
    addfields = (event) =>{
        this.setState({[event.target.name]:event.target.value});
    }
    click(){
        // var obj ={
        //     name : this.state.name,
        //     email : this.state.email,
        //     password : this.state.password,
        // }
        // console.log(obj);
        if( this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.user !==''){
            
            var link = "http://localhost:8000/admindetails/"+this.state.name+"/"+this.state.email+"/"+this.state.password+"/"+this.state.user
            axios.post(link).then(res => {
                alert("New user created successfully")
                console.log(res.data)
            })
        }
    }
    render() { 
        return ( 
            <div>
            <div className="backe">
                
                <div className="log">
                    <Card bg="secondary" text="white" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Form>
                                <Col>
                                    <Form.Group controlId="formBasicText">
                                        <Form.Label>NAME</Form.Label>
                                        <Form.Control type="text" name="name" placeholder="Enter name ..." required onChange={this.addfields} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="Enter email id ..." required onChange={this.addfields} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" placeholder="Enter password ..." required onChange={this.addfields} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                        <div><Button type="reset" variant="primary" onClick={this.click}>
                                             Submit
                                            </Button>
                                        </div>
                                </Col>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
         );
    }
}
 
export default Signup;