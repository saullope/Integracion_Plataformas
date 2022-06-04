<template>
    
        <SideHeader></SideHeader>
        <br><br><br><br><br>
        <div class="shadow-3 card mb-4 surface-500">
        
            <div class="grid">
                <div class="col-8 bg-blue-50 border-round">
                    <div class="grid">
                        <!-- Area de visualizacion de plataformas disponibles -->
                        <div v-for="i in plataformas" :key="id" class="col-12 md:col-6 xl:col-4 p-3">
                            <div class="surface-card shadow-2 border-rounded p-4">
                                <div class="flex border-bottom-1 surface-border pb-4">
                                    <Image v-bind:src="i.src" class="mr-3" style="width: 70px; height: 70px;"/>
                                        <div class="flex flex-column align-items-start">
                                            <span class="text-lg text-900 font-medium mb-1">{{i.title}}</span>
                                            <span class="text-600 font-medium mb-2">-----</span>
                                            <span class="bg-blue-50 text-blue-400 border-round inline-flex py-1 px-2 text-sm">
                                            <i class="pi pi-info-circle"></i><a class="ml-2 cursor-pointer" role="button" @click="prueba">Informacion</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="flex justify-content-between pt-4">
                                        <button class="p-button p-component p-button-primary w-full mr-2" 
                                                type="button"
                                                ><!---->
                                            <span class="pi pi-pencil p-button-icon p-button-icon-left"></span>
                                            <span class="p-button-label">{{i.crear}}</span><!---->
                                            <span class="p-ink"></span>
                                        </button>
                                       </div></div></div>
                        <!-- Fin de area de visualizacion -->
                    </div>
                </div>

                <!-- Area de visualizacion de informacion de una plataforma de evaluacion -->
                <div class="col ml-2 bg-blue-50 border-round ">
                    <div class="grid">
                    
                    </div>
                </div>
            </div>
            
        </div>
    
</template>

<script>
import SideHeader from '@/components/SideHeader.vue'

export default {
    name: "PlataformasEvaluacion",
    props: [],
    components: {
    SideHeader
},
    data(){
        return {
            plataformas : [
                {
                    id: 1,
                    title: "Google Forms",
                    crear: "Crear formulario",
                    Description: "lorejshsjssjshhmhyndghdjksjsjshsjsjsgsjssksg",
                    src: "../img/forms_miniatura.png"
                },
                {
                    id: 2,
                    title: "Kahoot!",
                    crear: "Crear Kahoot",
                    Description: "lorejshsjssjshhmhyndghdjksjsjshsjsjsgsjssksg",
                    src: "../img/kahoot_miniatura.png"
                }
            ]
        }
    },

    methods: {
        prueba: () => {
            // se manda la informacion al otro componente
        }
    }
}
</script>