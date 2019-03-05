import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager";

export default class EMployeeEditForm extends Component {
    // Set initial state
    state = {
        employeeName: "",
        locationId: ""
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
      evt.preventDefault()

      if (this.state.location === "") {
        window.alert("Please select a location");
      } else {
        const editedEmployee = {
          id: this.props.match.params.employeeId,
          name: this.state.employeeName,

          locationId: parseInt(this.state.locationId)
        };

    this.props.EditEmployee(editedEmployee)
    .then(() => this.props.history.push("/employees"))
    }
  }

    componentDidMount() {
      EmployeeManager.get(this.props.match.params.employeeId)
      .then(employee => {
        this.setState({
          employeeName: employee.name,

          locationId: employee.loactionId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="employeeForm">
            <div className="form-group">
              <label htmlFor="employeeName">Employee name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="employeeName"
                value = {this.state.employeeName}
              />
            </div>

            <div className="form-group">
            <label htmlFor="location">Assign to Location</label>
            <select
              name="location"
              id="locationId"
              onChange={this.handleFieldChange}
              value = {this.state.locationId}
            >
              <option value="">Select a Location</option>
              {this.props.locations.map(e => (
                <option key={e.id} id={e.id} value={e.id}>
                  {e.address}
                  {e.name}
                </option>
              ))}
            </select>
          </div>
            <button
              type="submit"
              onClick={this.updateExistingEmployee}
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </React.Fragment>
      );
    }
}