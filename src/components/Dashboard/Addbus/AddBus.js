import React, { Component } from 'react';
import './AddBus.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
class AddBus extends Component {
    constructor(props) {
        super(props);
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
            det : [],
            img : "",
            count : 0,
        }
        this.save = this.save.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    save() {
         var wifion = (this.state.wifi)?'Avalilable':'UnAvalilable';
         var wateron = (this.state.water)?'Avalilable':'UnAvalilable';
         var refreon = (this.state.refreshments)?'Avalilable':'UnAvalilable';
        // var obj={
        //     inputName : this.state.inputName,
        //     start : this.state.start,
        //     end : this.state.end,
        //     desc : this.state.desc,
        //     bustype : this.state.bustype,
        //     wifi : wifion,
        //     water : wateron,
        //     refreshments : refreon,
        //     capacity : this.state.capacity,
        //     fare : this.state.fare,
        //     img : this.state.img,
        // }
        
        // console.log(obj);
        // var one = this.state.det;
        // console.log(one);
        //  one.push(obj); 
        // this.setState({ det: one })
        // console.log(this.state.det);
        //      var data = JSON.stringify(this.state.det);
        // localStorage.setItem('Bus', data);
        if( this.state.start !== '' && this.state.end !== '' && this.state.inputName !== '' && this.state.desc !== '' && this.state.type !== '' && wifion !== '' && wateron !== '' && refreon !== '' && this.state.capacity !== '' && this.state.fare !== ''){
            
            var link = "http://localhost:8000/Busdetails/"+this.state.start+"/"+this.state.end+"/"+this.state.inputName+"/"+this.state.desc+"/"+this.state.bustype+"/"+wifion+"/"+wateron+"/"+refreon+"/"+this.state.capacity+"/"+this.state.fare+"/"+this.state.count
            axios.post(link).then(res => {
                alert("New bus created successfully")
                console.log(res.data)
            })
        }
    }
    imageUpload = (e) => {
        const file = e.target.files[0];
        var temp;
        getBase64(file).then(base64 => {
            temp =base64;
            this.setState({ img: temp });
        });
    };
    saveCheck(event){
        this.setState({ [event.target.name]: event.target.checked });
    }

    onChange = (event) => {

        this.setState({ [event.target.name]: event.target.value });
    }
    // componentDidMount(){
    //     this.setState({det : localStorage.getItem("Bus")!== null ? JSON.parse(localStorage.getItem("Bus")) : []})
    // }
    render() {
        return (
            <div>
                
            <div className = "bac">
                <div className = "container">
                    <Form>
                    <Col md={12}>
                            <Row>
                            <Col md={4}>
                                    <Form.Group as={Col} >
                                        <Form.Label>STARTING POINT</Form.Label>
                                        <Form.Control as="select" name="start" id="start" onChange={this.onChange} >
                                            <option value="">Select City</option>
                                            <option value="Chennai">CHENNAI</option>
                                            <option value="Coimbatore">COIMBATORE</option>
                                            <option value="Tirchy">TIRCHY</option>
                                            <option value="Bangalore">BANGALORE</option>
                                        </Form.Control>
                                    </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group as={Col} >
                                        <Form.Label>ENDING POINT</Form.Label>
                                        <Form.Control as="select" name="end" id="end" onChange={this.onChange}>
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
                                        <Form.Control type="text" placeholder="Enter Name Of The Bus"  name="inputName" id ="inputName" onChange={this.onChange}  required />
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    <Row>
                                    <Col md={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>BUS DESCRIPTION</Form.Label>
                                        <Form.Control as="textarea" rows="3" name="desc" onChange={this.onChange} id="desc" placeholder="Describe Here !"/>
                                    </Form.Group>
                                    </Col>
                                    <Col md={4}>
                                    <Form.Group as={Col} >
                                        <Form.Label>BUS TYPE</Form.Label>
                                        <Form.Control as="select" name="bustype" id="bustype" required onChange={this.onChange} /*onChange={this.onChange}*/ >
                                            <option value="">SELECT TYPE</option>
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
                                                <Col md={3}>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Wifi "
                                                    name="wifi"
                                                    id="wifi"
                                                    onChange={this.saveCheck.bind(this)}
                                                />
                                                </Col>
                                                <Col md={3}>
                                                <Form.Check
                                                    type="checkbox"
                                                    label="Water"
                                                    name="water"
                                                    id="water"
                                                    onChange={this.saveCheck.bind(this)}
                                                />
                                                </Col>
                                                <Col md={3}>
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
                                        <Form.Control type="Number" placeholder="No Of Seat Available" name="capacity" onChange={this.onChange} required id="capacity" /*onChange={this.onChange} *//>
                                    </Form.Group>
                                    </Col>
                                        <Col md={4}>
                                    <Form.Group as={Col}>
                                        <Form.Label>TICKET FARE</Form.Label>
                                        <Form.Control type="Number" placeholder="Fare" name="fare" id="fare" onChange={this.onChange} required/*onChange={this.onChange} *//>
                                    </Form.Group>
                                    </Col>
                                    </Row>
                                    {/* <Row>
                                        <Col md={9}>
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
                                    <Col md={0}>
                                        </Col>
                                        <Col md={0}>
                                    <img src={this.state.img}  width="100" height="100" alt="No File"/>
                                    </Col>
                                    </Row>
                                    <br /> */}
                                    <Row>
                                    <Col md={3}>   
                                    <Form.Group as={Col}>
                                    <Button variant="primary" type="reset" onClick={this.save}>
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
                    <br />
                    <br />
                    <br />
                </div>
            </div>
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