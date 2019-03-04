import React, { Component } from "react";
import "./AnimalList.css"

export default class AnimalForm extends Component {
    // Set initial state
    state = {
        animalName: "",
        breed: "",
        employeeId: "",
        ownerName: "",
        ownerPhoneNumber: "",
        animalId: "",
        ownerId:""
    };

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*
          Local method for validation, creating animal object, and
          invoking the function reference passed from parent component
       */
    constructNewAnimal = evt => {
        evt.preventDefault();
        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {
            const animal = {
                name: this.state.animalName,
                breed: this.state.breed,
                // Make sure the employeeId is saved to the database as a number since it is a foreign key.
                employeeId: parseInt(this.state.employeeId)
            };
            // sessionStorage.setItem(animal, JSON.stringify(animal))





            // Create the animal and redirect user to animal list
            return this.props.addNewAnimal(animal)
            .then(animal => this.setState({animalId: animal.id}))
            .then(()=> this.constructNewOwner())

        }
    };


    constructNewOwner = () => {

        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {

            const owner = {
                name: this.state.ownerName,
                phoneNumber: this.state.ownerPhoneNumber
            }


            // Create the animal and redirect user to animal list
            this.props
                .addNewOwner(owner)

                .then(owner => {console.log(owner)
                    this.setState({ownerId: owner.id})})
                    .then(()=>this.constructNewAnimalOwner())
                    .then(() => this.props.history.push("/animals"));
        }
    };

    constructNewAnimalOwner = ()=> {
        console.log(this.state.ownerId)
        if (this.state.employee === "") {
            window.alert("Please select a caretaker");
        } else {
            // sessionStorage.getItem("animalId")

            const animalOwner = {
                animalId: parseInt(this.state.animalId),
                ownerId: parseInt(this.state.ownerId)
            }

console.log(animalOwner)
            // Create the animal and redirect user to animal list
            this.props
                .addNewAnimalOwner(animalOwner)
                // .then(() => this.props.history.push("/animals"));
        }

    }


    render() {
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="animalName"
                            placeholder="Animal name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="breed">Breed</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="breed"
                            placeholder="Breed"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="owner Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ownerPhoneNumber">Owner Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerPhoneNumber"
                            placeholder="owner phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                            defaultValue=""
                            name="employee"
                            id="employeeId"
                            onChange={this.handleFieldChange}
                        >
                            <option value="">Select an employee</option>
                            {this.props.employees.map(e => (
                                <option key={e.id} id={e.id} value={e.id}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={(evt) => { this.constructNewAnimal(evt);}}
                        className="btn btn-primary"
                    >
                        Submit
          </button>
                </form>
            </React.Fragment>
        );
    }
}