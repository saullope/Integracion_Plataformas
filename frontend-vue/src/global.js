import { reactive } from "vue";

const datos = reactive({
    id: null,
    nombre: 'Saul Isaac',
    apellidos: 'Lopez Rios',
    carnet : null,
    grupo: null,
    departamento: null
});

export default { datos };