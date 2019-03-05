import React, { Component } from 'react';
import "./LocationList.css"
import store from "./store.png"

export default class LocationList extends Component {
    render() {
        return (
            // <article className ="LocationListContainer">
            <section className="LocationList">
                {this.props.locations.map(location =>
                    <div>
                        <img src={store} className="icon--store" />
                        <h2>{location.name}</h2>
                        <h3>{location.address}</h3>
                        <h4>Employees at this location:</h4>
                        {
                            this.props.employees
                                .filter(employee => employee.locationId === location.id)
                                .map(employee => <section>
                                    { " "}
                                    {employee.name}
                                     </section>)
                        }

                    </div>

                )}
            </section>

        );
    }
}
