import Settings from "./Settings";


export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/animalOwners`).then(e => e.json())

    },

    get(id) {
        return fetch(`${Settings.remoteURl}/animalOwners/${id}`).then(e => e.json())
      },
      removeAndlist(id) {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })

      },
      CreateNewAnimalOwner(newAnimalOwner) {
        return fetch(`http://localhost:5002/animalOwners`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newAnimalOwner)
        }).then(data => data.json())
      }

}
