export default class Estudiantes {

    getEstudiantes() {
        return fetch('data/estudiantesActual.json').then(res => res.json()).then(d => d.data);
    }
}