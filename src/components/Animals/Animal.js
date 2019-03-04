import React, { Component } from 'react'
import dog from "./DogIcon.png"
import { Link } from "react-router-dom";


class Animal extends Component {
    render() {

        return (
            <section key={this.props.animal.id} className="animal">

                <div className="card-body">

                        <img src={dog} className="icon--dog" />
                        </div>


                    <div>Pet: {this.props.animal.name}</div>
                    {" "}
                    <div>
                        Owner: {this.props.owners.join(", ")}
                    </div>
                    <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                    <button
                        onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                        className="card-link">Delete</button>
            </section>
                )
            }
        }
        
export default Animal

