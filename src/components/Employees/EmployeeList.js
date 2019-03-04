import React, { Component } from 'react'


class EmployeeList extends Component {
    render() {
        return (
            <section className="employees">
             < >
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")}
                            }>
                        Hire New Employee
                    </button>
                </div>
                </>
            {
                this.props.employees.map(employee =>
                    <div key={employee.id}>
                        {employee.name}
                        <button onClick={() => { this.props.deleteEmployee(employee.id) }}>FIRE</button>
                    </div>
                )
            }
            </section>
        )
    }
}

export default EmployeeList