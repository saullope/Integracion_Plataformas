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
                                            <Steps :model="item" :readonly="true" />
                                        </div>
                                    </div>

                                </div>
                                <div class="col-12">
                                    <router-view v-slot="{Component}" >
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

        
        
    },

}
</script>