import React, { Component } from 'react'
import dog from "./DogIcon.png"


class Animal extends Component {
    render() {

        return (
            <section key={this.props.animal.id} className="animal">

                <div className="card-body">

                        <img src={dog} className="icon--dog" />
                        </div>


                    <div>{this.props.animal.name}</div>
                    <div>
                        {this.props.owners.join(", ")}
                    </div>
                    <button
                        onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                        className="card-link">Delete</button>
            </section>
                )
            }
        }
        
export default Animal

