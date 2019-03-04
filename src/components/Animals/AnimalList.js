import React, { Component } from 'react'
import "./AnimalList.css"
import Animal from './Animal';



class AnimalList extends Component {
    componentDidMount() {
        console.log("componentDidMount -- AnimalList")
    }
    render() {
        return (
            <section>
                <h2 className="animalsheader">Animals</h2>
            < >
                <div className="animalButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/animals/new")}
                            }>
                        Admit Animal
                    </button>
                </div>
                </>
                <button onClick={
                    () => this.props.loadAnimals()
                } className="reloadANimalsButton">Reload Animals</button>

            <section className="animals">
                {() => this.props.loadAnimals()}


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
                </section>

            </section>
        )
    }
}

export default AnimalList

