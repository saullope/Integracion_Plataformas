<template>
<div class="container p-3">
    <div class="grid p-fluid">
        
        <div class="col-12 md:col-4">
                    <div class="flex flex-justify-content-start p-1 text-ml">
                <span>Agrega un titulo a la evaluacion <span class="ob">*</span></span>
            </div>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-pencil"></i>
                </span>
                <InputText class="p-invalid" v-model="tituloEvaluacion" placeholder="Titulo de la Evaluacion" />
            </div>
        </div>
        <div class="col-12 md:col-3">
        <div class="flex flex-justify-content-start p-1 text-ml">
                <span>Selecciona uno o varios grupos <span class="ob">*</span></span>
            </div>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-users"></i>
                </span>
                <MultiSelect v-model="selectedItems" :options="items" :maxSelectedLabels="3" :selectAll="selectAll" @selectall-change="onSelectAllChange($event)" @change="onChange($event)" optionLabel="label" optionValue="value" :virtualScrollerOptions="{ itemSize: 44 }" placeholder="Seleccionar Grupo" display="chip" />
            </div>
        </div>
        <div class="col-12 md:col-3">
        <div class="flex flex-justify-content-start p-1 text-ml">
                <span>Fecha de Inicio - Fecha de Finalizacion <span class="ob">*</span></span>
            </div>
            <div class="p-inputgroup">
                <span class="p-inputgroup-addon">
                    <i class="pi pi-calendar"></i>
                </span>
                <Calendar id="multiple" v-model="dates1" :show-time="true" :show-seconds="true" selectionMode="multiple" :manualInput="false" />
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
</div>
</template>      

<script>

export default {

    data(){
        return {
            tituloEvaluacion: null,
            submited : false,
            selectedItems : null,
            validateErrors: {},
            dates1: null,
            items : [
                {label: '1er A', value: '1er A'},
                {label: '1er B', value: '1er B'},
                {label: '2do A', value: '2do A'}
                ]
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