import React, { Component } from 'react';
import './Get.css';
import { Form, Button, Row, Col, Tab } from 'react-bootstrap';
class AddBus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            det : [],
            img : ""
        }
        this.save = this.save.bind(this);
        //this.onChange = this.onChange.bind(this);
        //this.open = this.open.bind(this);
    }
    // open(){
    //     if(localStorage.getItem('Bus') !== 'NULL')
    //     {
    //     var a = localStorage.getItem('Bus');
    //     var Res = JSON.parse(a);
    //     this.setState({ det: Res });
    //     }
    // }
    save() {
        var inputName= document.getElementById("inputName").value;
        var start= document.getElementById("start").value;
        var end= document.getElementById("end").value;
        var desc= document.getElementById("desc").value;
        var bustype= document.getElementById("bustype").value;
        var wifi = document.getElementById("wifi").value;
        var water= document.getElementById("water").value;
        var refreshments= document.getElementById("refreshments").value;
        var capacity= document.getElementById("capacity").value;
        var fare= document.getElementById("fare").value;
        wifi == 'on'? wifi ='UnAvailable' : wifi = 'Available';
        (water === 'on')? water ='UnAvailable' : water = 'Available';
        (refreshments === 'on')? refreshments ='UnAvailable' : refreshments = 'Available';
        // if (wifi === 'on')
        // {
        //     wifi = 'Available';
        // }
        // else{
        //     wifi = 'UnAvailable';
        // }
        // if(water === 'on')
        // {
        //     water = 'Available';
        // }
        // else{
        //     water = 'UnAvailable';
        // }
        // if(refreshments === 'on')
        // {
        //     refreshments = 'Available';
        // }
        // else{
        //     refreshments = 'UnAvailable';
        // }
        var obj={
            inputName : inputName,
            start : start,
            end : end,
            desc : desc,
            bustype : bustype,
            wifi : wifi,
            water : water,
            refreshments : refreshments,
            capacity : capacity,
            fare : fare,
            img : this.state.img,
        }
        
        console.log(obj);
        var one = this.state.det;
        console.log(one);
         one.push(obj); 
        this.setState({ det: one })
        console.log(this.state.det);
             var data = JSON.stringify(this.state.det);
        localStorage.setItem('Bus', data);
        // this.setState({ [this.state]: "" });

    }
    imageUpload = (e) => {
        const file = e.target.files[0];
        var temp;
        getBase64(file).then(base64 => {
            temp =base64;
            this.setState({ img: temp });
        });
    };

    // onChange = (event) => {

    //     this.setState({ [event.target.name]: event.target.value });
    // }
    componentDidMount(){
        this.setState({det : localStorage.getItem("Bus")!== null ? JSON.parse(localStorage.getItem("Bus")) : []})
    }
    render() {
        return (
            <div className = "Hello">
                <Form>
                <Col md={12}>
                        <Row>
                        <Col md={3}>
                                <Form.Group as={Col} >
                                    <Form.Label>STARTING POINT</Form.Label>
                                    <Form.Control as="select" name="start" id="start" >
                                        <option value="">Select City</option>
                                        <option value="Chennai">CHENNAI</option>
                                        <option value="Coimbatore">COIMBATORE</option>
                                        <option value="Tirchy">TIRCHY</option>
                                        <option value="Bangalore">BANGALORE</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                <Col md={3}>
                                <Form.Group as={Col} >
                                    <Form.Label>ENDING POINT</Form.Label>
                                    <Form.Control as="select" name="end" id="end">
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
                                <Col md={3}> 
                                <Form.Group as={Col}>
                                    <Form.Label>BUS NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name Of The Bus"  name="inputName" id ="inputName" required />
                                </Form.Group>
                                </Col>
                                </Row>
                                <Row>
                                <Col md={3}>
                                <Form.Group as={Col}>
                                    <Form.Label>BUS DESCRIPTION</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="desc" id="desc" placeholder="Describe Here !"/>
                                </Form.Group>
                                </Col>
                                <Col md={3}>
                                <Form.Group as={Col} >
                                    <Form.Label>BUS TYPE</Form.Label>
                                    <Form.Control as="select" name="bustype" id="bustype" required /*onChange={this.onChange}*/ >
                                        <option value="">SELECT TYPE</option>
                                        <option value="SLEEPER">SLEEPER</option>
                                        <option value="SEMI-SLEEPER">SEMI-SLEEPER</option>
                                        <option value="AC">A/C</option>
                                        <option value="NON-AC">NON-AC</option>
                                    </Form.Control>
                                </Form.Group>
                                </Col>
                                </Row>
                                <Col>
                                <Form.Group>
                                    <Form.Group>
                                    <Row>
                                        <Col md={3}><Form.Label>
                                            EXTRAS
                                              </Form.Label>
                                        </Col>
                                        </Row>
                                        <Col md={4}>
                                        <Row>
                                            <Col>
                                            <Form.Check
                                                type="checkbox"
                                                label="Wifi "
                                                name="wifi"
                                                id="wifi"
                                                //onChange={this.saveCheck.bind(this)}
                                            />
                                            </Col>
                                            <Col>
                                            <Form.Check
                                                type="checkbox"
                                                label="Water"
                                                name="water"
                                                id="water"
                                                //onChange={this.saveCheck.bind(this)}
                                            />
                                            </Col>
                                            <Col>
                                            <Form.Check
                                                type="checkbox"
                                                label="Refreshments"
                                                name="refreshments"
                                                id="refreshments"
                                                //onChange={this.saveCheck.bind(this)}
                                            />
                                            </Col>
                                        </Row>
                                        </Col>
                                    </Form.Group>
                                </Form.Group>
                                </Col>
                                <Row>
                                    <Col md={3}>
                                <Form.Group as={Col}>
                                    <Form.Label>NO Of SEAT AVAILABLE</Form.Label>
                                    <Form.Control type="Nubmber" placeholder="No Of Seat Available" name="capacity" required id="capacity" /*onChange={this.onChange} *//>
                                </Form.Group>
                                </Col>
                                    <Col md={3}>
                                <Form.Group as={Col}>
                                    <Form.Label>TICKET FARE</Form.Label>
                                    <Form.Control type="Nubmber" placeholder="Fare" name="fare" id="fare" required/*onChange={this.onChange} *//>
                                </Form.Group>
                                </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <Form.Group as={Col}>
                                <div className="custom-file">
                                    <label >BUS IMAGE </label>
                                    <br />
                                    <input
                                        type="file"
                                        id="imageFile"
                                        name='imageFile'
                                        accept="image/*" onChange={this.imageUpload.bind(this)} 
                                        />
                                        </div>
                                        </Form.Group>
                                </Col>
                                <Col md={1}>
                                    Preview : 
                                    </Col>
                                    <Col md={0}>
                                <img src={this.state.img}  width="100" height="100" alt="No File"/>
                                </Col>
                                </Row>
                                <br /><br />
                                <Row>
                                <Col md={3}>   
                                <Form.Group as={Col}>
                                <Button variant="primary" type="submit" onClick={this.save}>
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
            </div>
        );
    }
 
}
const getBase64 = (file) => {
    return new Promise((resolve,reject) => {
       const reader = new FileReader();
       reader.onload = () => resolve(reader.result);
       reader.onerror = error => reject(error);
       reader.readAsDataURL(file);
    });
}

export default AddBus;