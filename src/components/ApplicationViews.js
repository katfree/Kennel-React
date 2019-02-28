import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employees/EmployeeList'
import OwnersList from './Animals/AnimalOwners';



class ApplicationViews extends Component {

    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        animalOwners: []
    }

    dischargeAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:5002/animals`))
            .then(e => e.json())
            .then(animals => this.setState({ animals: animals })
            )
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:5002/employees`))
            .then(e => e.json())
            .then(employees => this.setState({ employees: employees })
            )
    }

    deleteOwner = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
            .then(() => fetch(`http://localhost:5002/owners`))
            .then(e => e.json())
            .then(owners => this.setState({ owners: owners })
            )
            .then(() => fetch(`http://localhost:5002/animalOwners`))
            .then(e => e.json())
            .then(animalOwners => this.setState({ animalOwners: animalOwners })
            )
    }


    getAllAnimalsAgain = () => {
        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => this.setState({ animals: animals }))
    }



    componentDidUpdate() {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        fetch("http://localhost:5002/animals")
            .then(r => r.json())
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
                .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/locations")
                .then(r => r.json()))
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/owners")
                .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => fetch("http://localhost:5002/animalOwners")
                .then(r => r.json()))
            .then(animalOwners => newState.animalOwners = animalOwners)
            .then(() => this.setState(newState))
    }



    render() {
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals}
                        owners={this.state.owners}
                        animalOwners={this.state.animalOwners}
                        dischargeAnimal={this.dischargeAnimal}
                        loadAnimals={this.getAllAnimalsAgain}
                    />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees}
                        deleteEmployee={this.deleteEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners}
                        deleteOwner={this.deleteOwner}

                    />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews