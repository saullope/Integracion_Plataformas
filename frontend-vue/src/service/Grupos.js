export default class Grupos {
    
    getGrupos(){
        return fetch('data/Grupos.json').then(res => res.json()).then(d => d.gruposdata);
    }

}