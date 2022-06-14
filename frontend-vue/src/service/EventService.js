export default class EventService {

    getEvent() {
        console.log("hay conexion")
        return fetch('data/events.json').then(res => res.json()).then(d => d.data);
    }
}