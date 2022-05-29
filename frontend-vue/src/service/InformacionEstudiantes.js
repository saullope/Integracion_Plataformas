export default class InformacionEstudiantes {

    getStudents() {
        return fetch('data/estudiantes.json').then(res => res.json()).then(d => d.data);
    }
}