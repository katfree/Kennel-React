import React, { Component } from 'react'


class OwnersList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owners=>
                    <div key={owners.id}>
                        Owner: {owners.name}
                        Owners Phone Number: {owners.phoneNumber}
                        <button onClick={() => { this.props.deleteOwner(owners.id) }}>Leave</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default OwnersList