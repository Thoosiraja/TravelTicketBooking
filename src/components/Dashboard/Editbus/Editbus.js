import React, { Component } from 'react';
import { Form, Button, Modal, Col, Card, Row } from 'react-bootstrap';
import axios from 'axios';
import './Editbus.css';
class Editbus extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            inputName : "",
            start : "",
            end : "",
            desc : "",
            bustype : "",
            wifi : "",
            water : "",
            refreshments : "",
            capacity : "",
            fare : "",
            list: [],
            UserStart: "",
            UserEnd: "",
            EStart: "",
            EEnd: "",
            show: false,
            email: this.props.email,
            indexProvider: -1,
            No: 0,

        };
        this.display = this.display.bind(this);
        this.onset = this.onset.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.senddata = this.senddata.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onset = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    display() {
        //console.log("working");
        // var a = localStorage.getItem('Bus');
        // var Res = JSON.parse(a);
        // this.setState({ list: Res });
        // this.setState({ EStart: this.state.UserStart });
        // this.setState({ EEnd: this.state.UserEnd });
        if (this.state.EStart != "" && this.state.EEnd != "") {
            var link = "http://localhost:8000/Busdetails/" + this.state.EStart + "/" + this.state.EEnd + "/" + "a"
            axios.get(link).then(res => {
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
        var wifion = (this.state.wifi) ? 'Avalilable' : 'UnAvalilable';
        var wateron = (this.state.water) ? 'Avalilable' : 'UnAvalilable';
        var refreon = (this.state.refreshments) ? 'Avalilable' : 'UnAvalilable';
        var id = this.state.list[index].Id
        if (this.state.start !== '' && this.state.end !== '' && this.state.inputName !== '' && this.state.desc !== '' && this.state.type !== '' && wifion !== '' && wateron !== '' && refreon !== '' && this.state.capacity !== '' && this.state.fare !== '') {

            var link = "http://localhost:8000/Busdetails/" +id+"/"+ this.state.start + "/" + this.state.end + "/" + this.state.inputName + "/" + this.state.desc + "/" + this.state.bustype + "/" + wifion + "/" + wateron + "/" + refreon + "/" + this.state.capacity + "/" + this.state.fare + "/" + this.state.count
            axios.post(link).then(res => {
                alert("Bus updated successfully")
                console.log(res.data)
            })
        }
    }
    saveCheck(event) {
        this.setState({ [event.target.name]: event.target.checked });
    }

    onChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        return (
            <div>
                <div className="over1">
                    <div className="new">
                        <Col md={4}>
                            <Form>
                                <Form.Group as={Col} >
                                    <Form.Label>STARTING POINT</Form.Label>
                                    <Form.Control as="select" name="EStart" id="Start" onChange={this.onset} required >
                                        <option value="">Select City</option>
                                        <option value="Chennai">CHENNAI</option>
                                        <option value="Coimbatore">COIMBATORE</option>
                                        <option value="Tirchy">TIRCHY</option>
                                        <option value="Bangalore">BANGALORE</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>ENDING POINT</Form.Label>
                                    <Form.Control as="select" name="EEnd" id="End" onChange={this.onset} required>
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
                                if (lis.Start !== "" && lis.Destination !== "") {
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
                                                <Button variant="primary" onClick={() => this.handleShow(index)}>EDIT BUS</Button>

                                            </Card.Body>
                                        </Card>
                                    )
                                }
                            })
                        }</div>
                    </div>
                    <div>
                        <Modal size="lg" show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{this.state.list[this.state.indexProvider] !== undefined ? this.state.list[this.state.indexProvider].Name : ""}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {this.state.list[this.state.indexProvider] !== undefined ?
                                    <div className="container">
                                        <Form>
                                            <Col md={12}>
                                                <Row>
                                                    <Col md={4}>
                                                        <Form.Group as={Col} >
                                                            <Form.Label>STARTING POINT</Form.Label>
                                                            <Form.Control as="select" name="start" id="start" onChange={this.onChange} >
                                                                <option value="">Select City</option>
                                                                <option default value="Chennai">CHENNAI</option>
                                                                <option value="Coimbatore">COIMBATORE</option>
                                                                <option value="Tirchy">TIRCHY</option>
                                                                <option value="Bangalore">BANGALORE</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group as={Col} >
                                                            <Form.Label>ENDING POINT</Form.Label>
                                                            <Form.Control as="select" defalut={this.state.Start} name="end" id="end" onChange={this.onChange}>
                                                                <option>Select City</option>
                                                                <option value="Bangalore">BANGALORE</option>
                                                                <option value="Chennai">CHENNAI</option>
                                                                <option value="Coimbatore">COIMBATORE</option>
                                                                <option value="Tirchy">TIRCHY</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={7}>
                                                        <Form.Group as={Col}>
                                                            <Form.Label>BUS NAME</Form.Label>
                                                            <Form.Control type="text" placeholder={this.state.list[this.state.indexProvider].Name} name="inputName" id="inputName" onChange={this.onChange} required />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={4}>
                                                        <Form.Group as={Col}>
                                                            <Form.Label>BUS DESCRIPTION</Form.Label>
                                                            <Form.Control as="textarea" rows="3" name="desc" onChange={this.onChange} id="desc" placeholder={this.state.list[this.state.indexProvider].Desc} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group as={Col} >
                                                            <Form.Label>BUS TYPE</Form.Label>
                                                            <Form.Control as="select" name="bustype" id="bustype" required onChange={this.onChange} /*onChange={this.onChange}*/ >
                                                                <option value="">Select Type</option>
                                                                <option value="SLEEPER">SLEEPER</option>
                                                                <option value="SEMI-SLEEPER">SEMI-SLEEPER</option>
                                                                <option value="AC">A/C</option>
                                                                <option value="NON-AC">NON-AC</option>
                                                            </Form.Control>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Col md={4}>
                                                    <Form.Group>
                                                        <Form.Group as={Col}>
                                                            <Row>
                                                                <Col md={5}><Form.Label>
                                                                    EXTRAS
                                                                </Form.Label>
                                                                </Col>
                                                            </Row>
                                                            <Col md={18}>
                                                                <Row>
                                                                    <Col md={4}>
                                                                        <Form.Check
                                                                            type="checkbox"
                                                                            label="Wifi "
                                                                            name="wifi"
                                                                            id="wifi"
                                                                            onChange={this.saveCheck.bind(this)}
                                                                        />
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <Form.Check
                                                                            type="checkbox"
                                                                            label="Water"
                                                                            name="water"
                                                                            id="water"
                                                                            onChange={this.saveCheck.bind(this)}
                                                                        />
                                                                    </Col>
                                                                    <Col md={4}>
                                                                        <Form.Check
                                                                            type="checkbox"
                                                                            label="Refreshments"
                                                                            name="refreshments"
                                                                            id="refreshments"
                                                                            onChange={this.saveCheck.bind(this)}
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Form.Group>
                                                    </Form.Group>
                                                </Col>
                                                <Row>
                                                    <Col md={4}>
                                                        <Form.Group as={Col}>
                                                            <Form.Label>NO Of SEAT AVAILABLE</Form.Label>
                                                            <Form.Control type="Number" placeholder={this.state.list[this.state.indexProvider].Capacity} name="capacity" onChange={this.onChange} required id="capacity" /*onChange={this.onChange} */ />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={4}>
                                                        <Form.Group as={Col}>
                                                            <Form.Label>TICKET FARE</Form.Label>
                                                            <Form.Control type="Number" placeholder={this.state.list[this.state.indexProvider].Fare} name="fare" id="fare" onChange={this.onChange} required/*onChange={this.onChange} */ />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col md={3}>
                                                        <Form.Group as={Col}>
                                                            <Button variant="primary" type="reset" onClick={() => this.senddata(this.state.indexProvider)}>
                                                                Submit
                                                    </Button>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col md={3}>
                                                        <Form.Group as={Col}>
                                                            <Button variant="danger" type="reset">
                                                                Cancel
                                                    </Button>
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Form>
                                        <br />
                                    </div> : ""}<br />
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}
export default Editbus