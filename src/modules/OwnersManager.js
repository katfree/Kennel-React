import Settings from "./Settings";

export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/owners`).then(e => e.json())
        // .then(e => e.json())
    },

    get(id) {
        return fetch(`${Settings.remoteURl}/owners/${id}`).then(e => e.json())
    },
    CreateNewOwner(newOwner) {
        return fetch(`http://localhost:5002/owners`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newOwner)
        }).then(data => data.json())
      }

}