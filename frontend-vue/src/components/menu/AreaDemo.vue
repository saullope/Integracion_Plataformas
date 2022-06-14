<template>
<div>
<div class="grid grid-nogutter justify-content-between">
        <i></i>
            <!--<Button label="Next" @click="nextPage()" icon="pi pi-angle-right" icon-pos="right" />-->

            <div class="grid p-2">
            <div class="col">
            <div class="flex align-items-start justify-content-center p-3">
                <div class="flex align-items-start justify-content-center">
                    <Button @click="addForm" label="Crear Formulario"/>
                </div>
            </div>
            </div>
            <div class="col-8">
                <div class="card border-ground border-rounded bg-blue-500">
                    <div id="formHere">
                    </div>
                </div>
            </div>
            </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    mounted() {
        let JotFormAnywhere = document.createElement("script");
        JotFormAnywhere.setAttribute("src", "//js.jotform.com/JotFormAnywhere.js");
        document.head.appendChild(JotFormAnywhere);
    },
    computed() {
    },
    methods : {
        addForm() {
            JotformAnywhere.launchFormBuilder({
                insertTo: "#formHere",
                putEditButton: true,
                putDeleteButton: true
            });
        },
        cambiarDespues(){
            this.credencial = this.API_KEY
            this.habilitarKey = true
            this.habilitar = false
           // const generateUrl = formID => `https://api.jotform.com/form/${formID}?apiKey=${config.apiKey || localStorage.getItem('JF-apiKey')}`;
        }
    }
}
</script>