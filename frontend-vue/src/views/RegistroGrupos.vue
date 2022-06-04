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
import Sidebar from '@/components/Sidebar.vue'
import HeaderWorkspace from '../components/HeaderWorkspace.vue'


export default {
    props: [],
    components: {
    Sidebar,
    HeaderWorkspace
},
    data(){
        return {
          
            
        }
    },
    created(){

    },
    mounted(){

    },
    methods(){

    }
}

</script>

<style>
</style>