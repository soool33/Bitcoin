import React from "react";
import './App.css';


export default class Bitcoin extends React.Component {

    render() {
        return (

                <div className="container">
                    <div className="row">
                        <div className="card col-12">
                            <ul className="list-unstyled">
                                <img src={"bitcoin.jpg"} className="img-fluid"/>
                                <li> { this.props.name } </li>
                                <li> Value : { parseFloat(this.props.price).toFixed(2)  } $</li>
                                <li className={Math.sign(this.props.change) === -1 ? 'text-danger' : 'text-success'}>
                                    Tendance : {parseFloat(this.props.change).toFixed(4)}%
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

        )
    }
}

