import Settings from "./Settings";


export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/employees`).then(e => e.json())
    },

    get(id) {
        return fetch(`${Settings.remoteURl}/employees/${id}`).then(e => e.json())
      },
      removeAndList(id) {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })


      },
      CreateNewEmployee(newEmployee) {
        return fetch(`http://localhost:5002/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newEmployee)
        }).then(data => data.json())
      },
      EditEmployee(editedEmployee) {
        return fetch(`http://localhost:5002/employees/${editedEmployee.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(editedEmployee)
        }).then(data => data.json());
      }

}