import React, { Component } from 'react';
import { Form, Button, Modal, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import './DisplayDetails.css';
class Get extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            list: [],
            UserStart: "",
            UserEnd: "",
            Start: "",
            End: "",
            show: false,
            email: this.props.email,
            indexProvider: -1,
            No : 0,

        };
        this.display = this.display.bind(this);
        this.onset = this.onset.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.senddata = this.senddata.bind(this);
    }
    onset = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    display() {
        //console.log("working");
        // var a = localStorage.getItem('Bus');
        // var Res = JSON.parse(a);
        // this.setState({ list: Res });
        // this.setState({ Start: this.state.UserStart });
        // this.setState({ End: this.state.UserEnd });
        if (this.state.Start != "" && this.state.End != "") {
            var link = "http://localhost:8000/Busdetails/" + this.state.Start + "/" + this.state.End + "/" + "a"
            axios.get(link).then(res => {
                // alert("Data Collected")            
                this.setState({ list: res.data })
                console.log(this.state.list)
            })
        }
    }
    handleShow(index) {
        this.setState({ show: true, indexProvider: index });
        // this.setState({name:name})
        //console.log(index);

    }
    handleClose() {
        this.setState({ show: false });
    }
    senddata(index) { 
        var no = parseInt(this.state.No)
        console.log(index, this.state.list[index].Id,no)
        var id = this.state.list[index].Id
        var fare = this.state.list[index].Fare
        var capacity = this.state.list[index].Capacity
        if(capacity < this.state.No) {
            return(
                alert ("Tickets Not Available")
            );
            
        }
            var link = "http://localhost:8000/Busdetails/" + id + "/" + this.state.No
                axios.post(link).then(res => {
                    console.log(res.data)
                })
             link = "http://localhost:8000/Bookingdetails/" + this.state.email + "/" + id + "/" + this.state.No + "/" + fare
            axios.post(link).then(res => {
                console.log(res.data)
            })
            var total =fare * this.state.No
            link = "http://localhost:8000/Result/" + this.state.email + "/" + total + "/"+fare
                axios.post(link).then(res => {
                    console.log(res.data)
                })
            this.setState({ show: false });
            // this.setState({ name: "" })
            this.setState({ No: "" })
            alert("Ticket Booked")
    }
render() {
    return (
        <div>
            <div className="over">
                <div className="new">
                    <Col md={4}>
                        <Form>
                            <Form.Group as={Col} >
                                <Form.Label>STARTING POINT</Form.Label>
                                <Form.Control as="select" name="Start" id="Start" onChange={this.onset} required >
                                    <option value="">Select City</option>
                                    <option value="Chennai">CHENNAI</option>
                                    <option value="Coimbatore">COIMBATORE</option>
                                    <option value="Tirchy">TIRCHY</option>
                                    <option value="Bangalore">BANGALORE</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} >
                                <Form.Label>ENDING POINT</Form.Label>
                                <Form.Control as="select" name="End" id="End" onChange={this.onset} required>
                                    <option value="">Select City</option>
                                    <option value="Bangalore">BANGALORE</option>
                                    <option value="Chennai">CHENNAI</option>
                                    <option value="Coimbatore">COIMBATORE</option>
                                    <option value="Tirchy">TIRCHY</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                        <button type="button" onClick={this.display}>BUS DETAILS</button>
                    </Col>
                </div>
                <div><div className="row">
                        {
                            this.state.list.map((lis, index) => {
                                if (lis.Start !== "" && lis.Destination !== "" && lis.Capacity > -1) {
                                    return (
                                        <Card bg="dark" text="white" style={{ width: '18rem' }}>
                                            <Card.Header as="h6">BUS DETAILS</Card.Header>
                                            <Card.Body>
                                                <Card.Text>
                                                    {/* <img src={lis.img} width="100px" height="100px"></img><br />
                                                {lis.Name} */}
                                                    <div>
                                                        NAME : {lis.Name} <br />
                                                        FARE : {lis.Fare} <br />
                                                        SEAT AVAILABLE : {lis.Capacity} <br />
                                                    </div>
                                                </Card.Text>
                                                <Button variant="primary" onClick={() => this.handleShow(index)}>BOOK</Button>

                                            </Card.Body>
                                        </Card>
                                    )
                                }
                            })
                        }</div>
                    </div>
                    <div>
                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.list[this.state.indexProvider] !== undefined ? this.state.list[this.state.indexProvider].Name : ""}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {this.state.list[this.state.indexProvider] !== undefined ?
                                    <div>
                                        DESCRIPTION : {this.state.list[this.state.indexProvider].Desc} <br />
                                        BUS TYPE : {this.state.list[this.state.indexProvider].Type} <br />
                                        EXTRAS :
                            <li>WIFI :  {this.state.list[this.state.indexProvider].Wifi} <br /></li>
                                        <li>WATER :  {this.state.list[this.state.indexProvider].Water} <br /></li>
                                        <li>REFRESHMETS :  {this.state.list[this.state.indexProvider].Refreshments} <br /></li>
                                        NO OF SEATS REQUIRED : <input type="number" placeholder="No of seats required" name="No" onChange={this.onset} />
                                    </div> : ""}<br />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => this.senddata(this.state.indexProvider)}>
                                    CONFIRM
                    </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
export default Get