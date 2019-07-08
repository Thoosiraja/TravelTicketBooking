import React, { Component } from 'react';
import {Modal,Button} from 'react-bootstrap';
class Show extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: "",
            i: 0
        }
        this.ok = this.ok.bind(this);
    }
    ok() {
        var arr = [localStorage.getItem('Bus')];
        this.setState({
            i: this.state.i + 1
        })
        console.log(arr);
    }
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>BUS DETAILS</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label> BUS NAME :</label>
                        <label></label>
                        <br />
                        <br />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick = {this.ok}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}

export default Show;