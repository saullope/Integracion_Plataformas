<template>
<div class="grid p-3">
    <div class="col-12 md:col-4 p-2">
        <label for="basic" class="mr-2">Titulo de la Evaluación</label>
        <InputText id="basic" v-model="nombre" autocomplete="off" />
    </div>
    <div class="col-12 md:col-4 p-2">
        <label for="basic" class="mr-2">Grupos</label>
        <MultiSelect v-model="selectGrupos" :options="grupos" optionLabel="name" placeholder="Seleccionar Grupos" display="chip" />
    </div>
        

        <div class="col-12 md:col-6 p-2">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-calendar"></i>
                </span>
                <Calendar id="multiple" v-model="dates1" :show-time="true" :show-seconds="true" selectionMode="multiple" :manualInput="false" placeholder="Fecha de Inicio"/>
            </div>
        </div>
        <div class="col-12 md:col-6 p-2">
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-calendar"></i>
                </span>
                <Calendar id="multiple" v-model="dates2" :show-time="true" :show-seconds="true" selectionMode="multiple" :manualInput="false" placeholder="Fecha de Inicio"/>
            </div>
        </div>
    </div>
<div class="card">
    <div class="flex justify-content-center flex-wrap card-container blue-container">
        <div class="flex align-items-center justify-content-center">
            <Button @click="next" label="Siguiente" icon="pi pi-chevron-right" icon-pos="right"/>
        </div>
      
    </div>
</div>

</template>      

<script>

export default {

    data(){
        return {
            tituloEvaluacion: null,
            submited : false,
            selectGrupos : null,
            validateErrors: {},
            dates1: null,
            dates2: null,
            grupos: [
				{name: '3ro A', code: '3ro A'},
				{name: '3ro B', code: '3ro B'},
				{name: '4to A', code: '4to A'},
                {name: '4to B', code: '4to B'},
                {name: '5to A', code: '5to A'},
            ],
        }
    },
    mounted() {},
    computed() {


    },
    methods: {

        next(){
            console.log(this.tituloEvaluacion+ " - " +this.selectedItems+" - "+this.dates1);
            this.$router.push('/jotform/credential');
        }
             },

}
</script>

<style>

.ob {
    padding: 2;
    color: red;
}
</style>