<template>
 <div class="block-content">
        <div style="height: 100vh; overflow: hidden;">
            <div class="min-h-screen flex relative lg:static surface-ground">
                <!-- cargando el sidebar -->
                <Sidebar></Sidebar>
                <!-- cierre del Sidebar -->

                <!-- contenedor del header y el area de trabajo -->
                <div class="min-h-screen flex flex-column relative flex-auto">
                    <HeaderWorkspace></HeaderWorkspace>

                    <!-- Inicio del cuerpo del area de trabajo -->
                    <div class="p-3 flex flex-column flex-auto">
                        <div class="border-2 border-solid surface-border border-round surface-section flex-auto">
                            <!-- Aqui va todo el contenido del area de trabajo -->
                                <div class="grid">
            <div class="mt-5 mb-5 col shadow-3">
                <EstadisticaInicio></EstadisticaInicio>
            </div>
        </div>
        <div class="grid">
            <div class="ml-5 col-6" style="border-radius:1rem;background:linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%);">
                <section>
                    <span class="block text-6xl text-white font-bold mb-1">Inicia una Nueva Evaluacion</span>
                    <div class="text-6xl text-yellow-500 font-bold mb-3">texto interesante</div>
                    <p class="mt-0 mb-4 text-white line-height-3">Te llevaremos al area de evaluacion.</p>
            
                    <Button label="Vamos" type="button" class="p-button-rounded p-button-warning text-white font-bold" @click="goEvaluacion" />
                </section>
            </div>
            <div class="ml-2 mr-5 col">
                <div class="card">
                    <ul class="p-0 mx-0 mt-0 mb-4 list-none">
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-check text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3">Acceso a Multiples Plataformas de Evaluacion.</span>
                        </li>
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-check text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3">Crea Evaluaciones Interactivas y Divertidas.</span>
                        </li>
                        <li class="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div class="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                            <i class="pi pi-check text-xl text-blue-500"></i>
                            </div>
                            <span class="text-900 line-height-3">Controla la Informacion de tus Alumnos.</span>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>                      
                            <!--------------------------------------------------->
                        </div>
                    </div>
                    <!-- Fin del area de trabajo -->
                </div>
                <!-- fin del header y el area de trabajo-->
            </div>
        </div>    
    </div>
</template>

<script>
import EstadisticaInicio from '@/components/EstadisticaInicio.vue'
import Sidebar from '@/components/Sidebar.vue'
import HeaderWorkspace from '@/components/HeaderWorkspace.vue'

export default {

    props:{
        
    },
    components:{
    EstadisticaInicio,
    Sidebar,
    HeaderWorkspace
},
    data(){
        return {
            contador: 0
        }
    },
    methods: {
        goEvaluacion(){
            this.$router.push('/evaluaciondatos')
        }
    }
}
</script>