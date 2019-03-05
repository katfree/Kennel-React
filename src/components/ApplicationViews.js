import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './Animals/AnimalList'
import LocationList from './Location/LocationList'
import EmployeeList from './Employees/EmployeeList'
import OwnersList from './Animals/AnimalOwners';
import AnimalManager from '../modules/AnimalManager'
import EmployeeManager from '../modules/EmployeeManager'
import LocationManager from '../modules/LocationManager'
import OwnersManager from '../modules/OwnersManager'
import AnimalOwnerManager from '../modules/AnimalOwnerManager'
import AnimalDetail from './Animals/AnimalDetail'
import AnimalForm from './Animals/AnimalForm'
import EmployeeForm from './Employees/EmployeeForm';
import Login from './authentication/Login'
import AnimalEditForm from './Animals/AnimalEditForm';
import EmployeeEditForm from './Employees/EditEmployeeForm';
class ApplicationViews extends Component {


    state = {
        locations: [],
        animals: [],
        employees: [],
        owners: [],
        animalOwners: []
    }
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null


    EditAnimal = (editedAnimalObject) => {
        return AnimalManager.EditAnimal(editedAnimalObject)
        .then(() => AnimalManager.getAll())
        .then(animals => {
          this.setState({
            animals: animals
          })
        });
      };

      EditEmployee = (editedEmployeeObject) => {
        return EmployeeManager.EditEmployee(editedEmployeeObject)
        .then(() => EmployeeManager.getAll())


            .then(employees => this.setState({ employees: employees })
            )
      };


    addNewAnimalOwner = animalOwner => {
        return AnimalOwnerManager.CreateNewAnimalOwner(animalOwner)
            .then(() => OwnersManager.getAll())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            )
            .then(() => AnimalManager.getAll())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            )
            .then(() => AnimalOwnerManager.getAll())
            .then(animalOwners => this.setState({ animalOwners: animalOwners })
            )

    }

    addNewOwner = owner => {
        return OwnersManager.CreateNewOwner(owner)

    }

    addNewEmployee = employee => {
        return EmployeeManager.CreateNewEmployee(employee)
            .then(() => EmployeeManager.getAll())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            )
    }

    addNewAnimal = animal => {
        return AnimalManager.CreateNewAnimal(animal)

    }

    dischargeAnimal = id => {
        return AnimalManager.removeAndlist(id)
            .then(() => AnimalManager.getAll())
            .then(animals => this.setState({ animals: animals })
            )
    }

    deleteEmployee = id => {
        return EmployeeManager.removeAndList(id)
            .then(() => EmployeeManager.getAll())


            .then(employees => this.setState({ employees: employees })
            )
    }

    deleteOwner = id => {
        return AnimalOwnerManager.removeAndlist(id)
            .then(() => OwnersManager.getAll())
            .then(owners => this.setState({ owners: owners })
            )
            .then(() => AnimalOwnerManager.getAll())
            .then(animalOwners => this.setState({ animalOwners: animalOwners })
            )
    }


    getAllAnimalsAgain = () => {
        AnimalManager.getAll()
            .then(animals => this.setState({ animals: animals }))
    }



    componentDidUpdate() {
        console.log("componentDidUpdate -- ApplicationViews")
    }

    componentDidMount() {
        console.log("componentDidMount -- ApplicationViews")
        const newState = {}

        AnimalManager.getAll()
            .then(animals => newState.animals = animals)
            .then(() => EmployeeManager.getAll())
            .then(employees => newState.employees = employees)
            .then(() => LocationManager.getAll())
            .then(locations => newState.locations = locations)
            .then(() => OwnersManager.getAll())
            .then(owners => newState.owners = owners)
            .then(() => AnimalOwnerManager.getAll())
            .then(animalOwners => newState.animalOwners = animalOwners)
            .then(() => this.setState(newState))
    }



    render() {
        console.log("render -- ApplicationViews")
        return (
            <React.Fragment>
                <Route path="/login" component={Login} />
                <Route exact path="/" render={(props) => {
                    return <LocationList {...props}
                        locations={this.state.locations}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props}
                        animals={this.state.animals}
                        owners={this.state.owners}
                        animalOwners={this.state.animalOwners}
                        dischargeAnimal={this.dischargeAnimal}
                        loadAnimals={this.getAllAnimalsAgain}
                    />
                }} />
                <Route exact path="/employees" render={props => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList {...props}
                            animals={this.state.animals}
                            employees={this.state.employees}
                            deleteEmployee={this.deleteEmployee}
                            owners={this.state.owners}
                            animalOwners={this.state.animalOwners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList {...props}
                        owners={this.state.owners}
                        deleteOwner={this.deleteOwner}

                    />
                }} />

                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                        return <EmployeeEditForm {...props}
                        employees={this.state.employees}
                         EditEmployee={this.EditEmployee}
                          animals={this.state.animals}
                          owners={this.state.owners}
                          locations={this.state.locations}
                          />
                    }}
                />

                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props}
                        dischargeAnimal={this.dischargeAnimal}
                        animals={this.state.animals} />
                }} />

                <Route
                    path="/animals/:animalId(\d+)/edit" render={props => {
                        return <AnimalEditForm {...props}
                        employees={this.state.employees}
                         editAnimal={this.EditAnimal}
                         animals={this.state.animals}
                         owners={this.state.owners}
                          />
                    }}
                />

                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addNewAnimal={this.addNewAnimal}
                        employees={this.state.employees}
                        addNewOwner={this.addNewOwner}
                        owners={this.state.owners}
                        addNewAnimalOwner={this.addNewAnimalOwner}
                    />
                }} />

                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addNewEmployee={this.addNewEmployee}
                        locations={this.state.locations}
                        employees={this.state.employees} />

                }} />



            </React.Fragment>
        )
    }
}

export default ApplicationViews