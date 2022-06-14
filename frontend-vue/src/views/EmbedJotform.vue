<template>
<div>
  <div class="block-content">
        <div style="overflow: hidden;">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <!-- contenedor del header y el area de trabajo -->
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <HeaderWorkspace></HeaderWorkspace>

                    <!-- Inicio del cuerpo del area de trabajo -->
                    <div class="p-3 flex flex-column flex-auto">
                        <div class="border-2 border-solid surface-border border-round surface-section flex-auto">
                    <!-- Aqui va todo el contenido del area de trabajo -->
                            
                            <div class="grid">
                                <div class="col-12">
                                    <div class="card p-2">
                                        <div class="flex justify-content-start flex-wrap card-container blue-container p-2">
                                            <div>
                                            <h2>Crea formularios dinámicos con <span class="text-blue-600 text-xl">JotForm</span></h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="card">
                                            <Steps :model="item" :readonly="false" />
                                        </div>
                                    </div>

                                </div>
                                <div class="col-12">
                                    <router-view v-slot="{Component}" :formData="formObject" @prevPage="prevPage($event)" @nextPage="nextPage($event)" @complete="complete">
                                        <keep-alive>
                                            <component :is="Component" />
                                        </keep-alive>
                                    </router-view>
                                </div>
                                
                            </div>

                                                                          
                    <!-- Fin del area de trabajo -->
                </div>
                <!-- fin del header y el area de trabajo-->
            </div>
        </div>   
            </div>    
    </div> 
    </div>     
</div>
</template>
<script>
import HeaderWorkspace from '@/components/HeaderWorkspace.vue'

export default {
    components: { HeaderWorkspace },
    data() {
        return {
            habilitar: true,
            API_KEY: '5fd72b0f34e0a9e0f3ee831095f1cd0a',
            credencial: null,
            habilitarKey: false,
            generateUrl: null,
          
            item: [{
                label: 'Asignar',
                to: '/jotform/'
            },
            {
                label: 'Validar Usuario',
                to: '/jotform/credential'
            },
            {
                label: 'Area de Creacion',
                to: '/jotform/workspace'
            }],
            
            formObject: {}


        }
    },
    mounted() {
        let JotFormAnywhere = document.createElement("script");
        JotFormAnywhere.setAttribute("src", "//js.jotform.com/JotFormAnywhere.js");
        document.head.appendChild(JotFormAnywhere);
    },
    computed() {
    },
    methods: {
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
        },
        nextPage(event) {
            for (let field in event.formData) {
                this.formObject[field] = event.formData[field];
            }

            this.$router.push(this.items[event.pageIndex + 1].to);
        },
        prevPage(event) {
            this.$router.push(this.items[event.pageIndex - 1].to);
        },
        complete() {
            this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
        }
    },

}
</script>