import React, { Component } from 'react'
import dog from "./DogIcon.png"
import { Link } from "react-router-dom";


class Animal extends Component {
    render() {
        const Ownerarray = this.props.animalOwners
            .filter(ao => ao.animalId === this.props.animal.id)
            .map(ao =>
                this.props.owners.find(
                    o => o.id === ao.ownerId

                ).name

            )

            console.log(Ownerarray)

        return (
            <section key={this.props.animal.id} className="animal">

                <div className="card-body">

                    <img src={dog} className="icon--dog" />
                </div>


                <div className="petName">Pet: {this.props.animal.name}</div>

                <div className="ownerName">
                    Pet Owner: ({Ownerarray.join(", ")})
                </div>
                <Link className="nav-link-animal" to={`/animals/${this.props.animal.id}`}>Details</Link>
                <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                    }}
                >
                    Edit
                    </button>
                <button
                    onClick={() => this.props.dischargeAnimal(this.props.animal.id)}
                    className="deleteAnimal">Delete</button>
            </section>
        )
    }
}

export default Animal
