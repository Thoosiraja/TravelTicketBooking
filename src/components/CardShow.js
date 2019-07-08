import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
class CardShow extends Component {

    constructor(props) {
        super(props);

        this.state = {
            buses: []
        }
    }

    componentDidMount() {
        this.setState({ buses: localStorage.getItem("Bus") !== null ? JSON.parse(localStorage.getItem("Bus")) : [] });
    }

    render() {
        const display = <div>
        <div className="container-fluid">
            <div className="row header">
                <div className="col-md-6"><h2 className="head">Available Buses</h2></div>
            </div>
            <div className="row">
                {
                    this.state.buses.map((Bus, i) => {
                        return (
                            <div className="col-md-3 ren" key={i}>
                                <div className="row">
                                    <div className="col-md-6"><h5 className="card-title">{Bus.inputName}</h5></div>
                                    <div className="col-md-6"><p className="doff">{Bus.start}</p></div>
                                </div>
                                    {/* <div className="ind_image">
                                        <img src={ data.image !== 'null'? data.image : love } alt="" height="160" width="170"/>
                                    </div> */}
                                    <div className="card-body">
                                        <b className="name"><center>{Bus.inputName}</center></b>
                                        <p>Start : <strike className="strike">{Bus.start}</strike> To :{Bus.end}</p>
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </div>
        return (
            <div>
                {this.state.products.length !== 0 ? display : <h1 id="nodata">No data Found</h1>}
            </div>

        )
    }
}

export default CardShow