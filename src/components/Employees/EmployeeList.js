import React, { Component } from 'react'
import Animal from '../Animals/Animal';
import './employee.css'


class EmployeeList extends Component {
    render() {
        return (


            <section className="employeeList">
                <div className="employeeButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")
                        }
                        }>
                        Hire New Employee
                    </button>
                </div>
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id} className="employeeCard">
                                <h1 className="employeeName"> {employee.name}</h1>
                                <button
                                    type="button"
                                    className="editEmployeeButton"
                                    onClick={() => {
                                        this.props.history.push(`/employees/${employee.id}/edit`);
                                    }}
                                >
                                    Edit Employee
                            </button>

                                {" "}
                                <button className="deleteEmployeeButton" onClick={() => { this.props.deleteEmployee(employee.id) }}>Fire </button>


                                <div className="animals--caretaker">
                                    <h3 class="caretaker">Caretaker For</h3>
                                    {
                                        this.props.animals
                                            .filter(anml => anml.employeeId === employee.id)
                                            .map(anml => <Animal key={anml.id} animal={anml}  {...this.props} />)
                                    }
                                </div>
                            </div>
                        )
                    }
                </section>

            </section>
        )
    }
}

export default EmployeeList


