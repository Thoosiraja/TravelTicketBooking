import React, { Component } from 'react';
import { Form, Button, Modal, Row, Col, Card } from 'react-bootstrap';
import './Get.css';
class Get extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            list: [],
            Start: "",
            End: "",
            name: ""

        };
        this.display = this.display.bind(this);
        //this.disp = this.disp.bind(this);

        this.handleShow = () => {
            var startloc = document.getElementById("Start").value;
            var endloc = document.getElementById("End").value;
            this.setState({ Start: startloc, End: endloc });
            this.display();
            this.setState({ show: true });
        };

        this.handleHide = () => {
            this.setState({ show: false });
        };
    }

    display() {
        console.log("working");
        var a = localStorage.getItem('Bus');
        var Res = JSON.parse(a);
        this.setState({ list: Res });
    }
    // disp(name) {
    //     console.log("I am In");
    //     this.state.list.map((lis) => {
    //         if (lis.start === this.state.Start && lis.end === this.state.End && this.state.inputName === name) {
    //             return (
    //                 <div>
    //                     <h5>STARTING POINT: {lis.start}</h5>
    //                     <h5>ENDING POINT :{lis.end}</h5>
    //                     <h5>DESCRIPTION :{lis.desc}</h5>
    //                     <h5>EXTRAS :</h5>
    //                     <h6>WIFI : {lis.wifi}</h6>
    //                     <h6>WATER : {lis.water}</h6>
    //                     <h6>REFRESHMETS : {lis.refreshments}</h6>
    //                     <h5>BUS TYPE : {lis.bustype}</h5>
    //                     <h5>SEAT CAPACITY : {lis.capacity}</h5>
    //                     <h5>FARE : RS:{lis.fare}</h5>
    //                     <h5>PICTURES : </h5>
    //                     <img src={lis.img} height="150" width="150"></img>
    //                 </div>
    //             )
    //         }
    //     })
    // }

    render() {
        return (
            <div className="app">
                <Col md={4}>
                    <Form>
                        <Form.Group as={Col} >
                            <Form.Label>STARTING POINT</Form.Label>
                            <Form.Control as="select" name="start" id="Start" required >
                                <option value="">Select City</option>
                                <option value="chennai">CHENNAI</option>
                                <option value="coimbatore">COIMBATORE</option>
                                <option value="tirchy">TIRCHY</option>
                                <option value="bangalore">BANGALORE</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>ENDING POINT</Form.Label>
                            <Form.Control as="select" name="end" id="End" required>
                                <option>Select City</option>
                                <option value="bangalore">BANGALORE</option>
                                <option value="chennai">CHENNAI</option>
                                <option value="coimbatore">COIMBATORE</option>
                                <option value="tirchy">TIRCHY</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                    {/* <Button  class ="btn btn-default" variant="danger" data-backdrop="false" data-keyboard="false" onClick={this.handleShow}> */}
                    <button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#myModal3" onClick={this.handleShow} data-backdrop="true">BUS DETAILS</button>
                    {/* BUS DETAILS
                </Button> */}

                    <Modal
                        show={this.state.show}
                        onHide={this.handleHide}
                        dialogClassName="modal-90w"
                        aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title">
                                BUS DETAILS
              </Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Card bg="primary" text="white"  style={{ width: '30rem' }}>
                                <Card.Body>
                                    <Card.Title>Bus Details</Card.Title>
                                    <div className="beats">
                                        {
                                            this.state.list.map((lis) => {
                                                if (lis.start === this.state.Start && lis.end === this.state.End) {
                                                    return (
                                                        <div className="beats">


                                                            <div className="card-body">
                                                                <div className="card-body ">

                                                                    <Card.Text>
                                                                        <h3>BUS Name : {lis.inputName}</h3>
                                                                        <h5>STARTING POINT: {lis.start}</h5>
                                                                        <h5>ENDING POINT :{lis.end}</h5>
                                                                        <h5>DESCRIPTION :{lis.desc}</h5>
                                                                        <h5>EXTRAS :</h5>
                                                                        <h6>WIFI : {lis.wifi}</h6>
                                                                        <h6>WATER : {lis.water}</h6>
                                                                        <h6>REFRESHMETS : {lis.refreshments}</h6>
                                                                        <h5>BUS TYPE : {lis.bustype}</h5>
                                                                        <h5>SEAT CAPACITY : {lis.capacity}</h5>
                                                                        <h5>FARE : RS:{lis.fare}</h5>
                                                                        <h5>PICTURES : </h5>
                                                                        <img src={lis.img} height="150" width="150"></img>
                                                                    </Card.Text>
                                                                <hr />
                                                                </div>
                                                            </div>

                                                        </div>

                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                        </Modal.Body>

                    </Modal>
                </Col>
            </div>
        );
    }
}
export default Get