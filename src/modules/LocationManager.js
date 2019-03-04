import Settings from "./Settings";

export default {

    getAll() {
        return fetch(`${Settings.remoteURl}/locations`).then(e => e.json())
        // .then(e => e.json())

    },

    get(id) {
        return fetch(`${Settings.remoteURl}/locations/${id}`).then(e => e.json())
      }

}