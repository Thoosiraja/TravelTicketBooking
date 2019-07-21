import React, { Component } from 'react';
import { Form, Button, Col, Card } from 'react-bootstrap';
import Taskbar from '../Taskbar/Taskbar';
import { Redirect} from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import './Admin.css';
class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            email : "",
            pass : "",
            userdata : [],
            Roll : "",
            Name : "",
            Email : "",
            redirect : false,
        }
        this.write = this.write.bind(this);
    }
    write =(event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    componentWillMount(){
        var link = "http://localhost:8000/Logindetails/"
        axios.get(link).then(res => {
            // alert("Data Collected")            
            this.setState({userdata : res.data})
            // console.log(this.state.userdata)
        })
    }
        onClick = () => {
        
        var abc =[]        
         abc =this.state.userdata;
        //  console.log("1")
        //  console.log(abc)
         var locat = false;
        abc.forEach(user => {   
            if (user.Email=== this.state.email && user.Pass === this.state.pass) {
                // console.log("000")
                // console.log(user.Email)
                // console.log(user.Pass)
                this.setState({
                    Roll : user.Roll,
                    Name : user.Name,
                    Email : user.Email,
                })
                locat = false;
                this.onstate();
             }
             else{
                //  locat =true;
             }
            
        });
        // if(locat){
        //    alert("Worng User Name or Password"); 
        // }
    }    

    onstate = () => {
        this.setState({ show: true });
        // this.history.push("/dashboard")
        //  return(
        //     <div><Dashboard /></div>
        //  );
    }
    responseGoogle = (response) => {
        // if(response.)
        console.log(response);
        this.setState({
            Roll : "User",
            Name : response.profileObj.givenName,
            Email : response.profileObj.email,
            show : true,
        })
        var a =0
        var link = "http://localhost:8000/Result/"+this.state.Email+"/"+a
            axios.post(link).then(res => {
                console.log(res.data)
            })
      }
    render() {
        if(this.state.show){
            return(
                <Redirect to={{
                    pathname: '/dashboard',
                    state: { user: this.state.Roll, name: this.state.Name,email : this.state.Email}
                }}
        />
            );
        }
        else{
        return (
            <div>
                <Taskbar />
            <div className="back">  
                <div className="osm">
                    <Card bg="secondary" text="white" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Form>

                                {/* <Row> */}
                                <Col>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name ="email" required placeholder="Enter email" onChange={this.write} />
                                    </Form.Group>
                                </Col>
                                {/* </Row> */}
                                {/* <Row> */}
                                <Col>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name = "pass" required placeholder="Password" onChange={this.write} />
                                    </Form.Group>
                                </Col>
                                {/* </Row> */}
                                {/* <Row> */}
                                <Col>

                                    {/* <Link to='/dashboard'> */}
                                         <div><Button variant="primary" type="reset" onClick={this.onClick.bind(this)}>
                                              Submit
                                             </Button>
                                         </div>
                                    {/* </Link> */}
                                   
                                        {/* <div>
                                            {
                                                (this.state.show)?<Link to='/dashboard'>
                                                <div><Button variant="primary" type="reset" onClick={this.onClick.bind(this)}>
                                                     Submit
                                                    </Button>
                                                </div>
                                            </Link>:<Button variant="primary" type="reset" onClick={this.onClick.bind(this)}>
                                                Submit
                                               </Button>
                                             }
                                    </div> */}
                                    <br />
                                    <GoogleLogin
                            clientId="672780292442-qhd68068hfqlti3n92ougidmimirntlj.apps.googleusercontent.com"
                            buttonText="GOOGLE LOGIN"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                          />
                                    
                                </Col>
                                {/* </Row> */}

                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            </div>
        );
    }
    }
}
export default Admin;