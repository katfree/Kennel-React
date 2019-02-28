import React, { Component } from 'react'
import "./AnimalList.css"
import Animal from './Animal';



class AnimalList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- AnimalList")
    }
    render() {
        return (
            <section className="animals">
                <h2 className = "animalsheader">Animals</h2>
               { () => this.props.loadAnimals() }
               
                {
                    this.props.animals.map(animal =>
                        <Animal key={`animal-${animal.id}`}
                            animal={animal}
                            dischargeAnimal={this.props.dischargeAnimal}
                            owners={
                                this.props.animalOwners
                                    .filter(ao => ao.animalId === animal.id)
                                    .map(ao =>
                                        this.props.owners.find(
                                            o => o.id === ao.ownerId
                                        ).name
                                    )
                            }
                           />
                    )

                }
                <button onClick={
                    () => this.props.loadAnimals()
                }>Reload Animals</button>
            </section>
        )
    }
}

export default AnimalList

