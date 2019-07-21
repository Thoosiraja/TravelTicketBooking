import React, { Component } from 'react';
import { Form,Col,Table} from 'react-bootstrap';
import axios from 'axios';
import './Alldetails.css';
class Alldetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            View : "",
            list :[],
            buslist : [],
        }
        this.onset=this.onset.bind(this)
    }
    onset = (event) => {
        this.setState({[event.target.name] : [event.target.value]})
    }
    componentDidMount(){
        var link = "http://localhost:8000/Result/"
            axios.get(link).then(res => {
                // alert("Data Collected")            
                this.setState({ list: res.data })
                console.log(this.state.list)
            })
            var a = 0
            link = "http://localhost:8000/Busdetails/"+a
            axios.get(link).then(res => {
                // alert("Data Collected")            
                this.setState({ buslist: res.data })
                console.log(this.state.list)
            })
    }
    render() {
        return (
            <div>
                {/* <Form>
                    <Col md={3}>
                    <Form.Group>
                        <Form.Label>SELECT VIEW</Form.Label>
                        <Form.Control as="select" name="View" id="View" onChange={this.onset} required >
                            <option value="">Select view</option>
                            <option value="User">USER</option>
                            <option value="Bus">BUS</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                </Form> */}
                <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>USER</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.list.map((lis, index) => {
                            return (
                                <tr>
                                <td>{lis.Email}</td>
                                <td>{lis.Total}</td>
                                </tr>
                            )
                        }
                        )
                        }
                        </tbody>
                    </Table>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>BUS ID</th>
                                <th>TOTAL SEAT BOOKED</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.buslist.map((blis, index) => {
                            return (
                                <tr>
                                <td>{blis.Id}</td>
                                <td>{blis.Count}</td>
                                </tr>
                            )
                        }
                        )
                        }
                        </tbody>
                    </Table>
            </div>
        );
    }
}

export default Alldetails;