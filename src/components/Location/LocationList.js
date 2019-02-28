import React, { Component } from 'react';
import "./LocationList.css"

export default class LocationList extends Component {
    render() {
        return (
            <article className ="LocationListContainer">
                <section className ="LocationOne">
                    <h2>Nashville North</h2>
                    <div>
                        1000 Infinity Way
                    </div>
                </section>
                <section className = "LocationTwo">
                    <h2>Nashville South</h2>
                    <div>
                        555 Demonbreun Drive
                    </div>
                </section>
            </article>
        );
    }
}
