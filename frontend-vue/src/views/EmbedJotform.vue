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
                            <div class="flex justify-content-start flex-wrap card-container blue-container">
                                <div class="flex align-items-center justify-content-center p-3">
                                    <Breadcrumb :home="home" :model="items" />
                                </div>
                            </div>
                            <div class="grid">
                                <div class="col-6">
                                    <div class="card p-2">
                                        <div class="flex justify-content-start flex-wrap card-container blue-container p-2">
                                            <div>
                                            <h2>Crea formularios dinamicos</h2>
                                            <span>Aqui va la informacion de los grupos al que se le aplica la evaluacion</span>
                                            </div>
                                        </div>
                                        <div class="flex justify-content-start flex-wrap">
                                                <div class="flex align-items-center justify-content-center p-3">
                                                    <Button @click="cambiarDespues" label="Validar Credenciales" class="p-button-success" />
                                                </div>
                                                <div class="flex align-items-center justify-content-center p-3">
                                                    <InputText type="text" v-model="credencial" :disabled="habilitarKey">{{credencial}}</InputText>
                                                </div>
                                                <div class="flex align-items-center justify-content-center p-3">
                                                    <Button @click="addForm" label="Crear Formulario" :disabled="habilitar"/>
                                                </div>
                                            </div>

                                    </div>
                                </div>
                                <div class="col-6">
                                    6
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
            home: { icon: 'pi pi-home', to: '/principal' },
            items: [ {label: 'JotForm Workspace'} ],
            habilitar: true,
            API_KEY: '5fd72b0f34e0a9e0f3ee831095f1cd0a',
            credencial: null,
            habilitarKey: false

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
            JotformAnywhere.launchFormBuilder({});
        },
        cambiarDespues(){
            this.credencial = this.API_KEY
            this.habilitarKey = true,
            this.habilitar = false
        }
    },

}
</script>