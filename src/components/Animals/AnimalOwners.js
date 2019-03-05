import React, { Component } from 'react'
import "./AnimalList.css"


class OwnersList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owners=>
                    <div key={owners.id} className="individualOwner">
                        <h3>{owners.name} </h3>

                        <div>Phone Number: {owners.phoneNumber}</div>
                        <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => {
                        this.props.history.push(`/owners/${this.props.owner.id}/edit`);
                    }}
                >
                    Edit
                </button>
                        <button onClick={() => { this.props.deleteOwner(owners.id) }}>Leave</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnersList