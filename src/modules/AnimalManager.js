import Settings from "./Settings";



export default {
  get(id) {
    return fetch(`${Settings.remoteURl}/animals/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${Settings.remoteURl}/animals`).then(e => e.json())

  },
  removeAndlist(id){
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
  })
  },
  CreateNewAnimal(newAnimal) {
    return fetch(`http://localhost:5002/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json())
  },
  EditAnimal(editedAnimal) {
    return fetch(`http://localhost:5002/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}


