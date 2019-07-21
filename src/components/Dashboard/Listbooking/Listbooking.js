import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Listbooking.css';
import axios from 'axios';
class Listbooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            list: [],
        }
    }
    componentDidMount() {
        var link = "http://localhost:8000/Bookingdetails/" + this.state.email
        axios.get(link).then(res => {
            // alert("Data Collected")            
            this.setState({ list: res.data })
            console.log(this.state.list)
        })
    }
    render() {
        return (
            <div>
                <div className="row">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>BUS ID</th>
                                <th>No Of Tickets Booked</th>
                                <th>Total Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                        this.state.list.map((lis, index) => {
                            return (
                                <tr>
                                <td>{lis.Bus_id}</td>
                                <td>{lis.No_of_tickets_booked}</td>
                                <td>{lis.Total_amount}</td>
                                </tr>
                            )
                        }
                        )
                        }
                        </tbody>
                    </Table>
                    </div>
            </div>
        );
    }
}

export default Listbooking;