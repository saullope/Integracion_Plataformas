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
                            <div class="mb-3 font-bold text-2xl">
		                    	<span class="text-900">Grupos de  </span>
		                     	<span class="text-blue-600">estudiantes</span>
		                    </div>
                                    <div class="text-700 text-sm mb-6">¿Cual deseas ver?</div>
                                    <div class="grid">
                                        <div class="col-12 md:col-4 mb-4 px-5">
                                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                                <i class="pi pi-fw pi-users text-4xl text-blue-500"></i>
                                            </span>
                                            <div class="text-900 mb-3 font-medium">nombre</div>
                                             <div class="text-900 mb-3 font-medium">docente</div>

                                             <Button label="Ver grupo"  class="mr-1" @click="openNew"/>
                                        </div>
                                        <div class="col-12 md:col-4 mb-4 px-5">
                                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                                <i class="pi pi-fw pi-users text-4xl text-blue-500"></i>
                                            </span>
                                            <div class="text-900 mb-3 font-medium">nombre</div>
                                             <div class="text-900 mb-3 font-medium">docente</div>   
                                             <Button label="Ver grupo"  class="mr-1" @click="openNew"/>
                                        </div>
                                        <div class="col-12 md:col-4 mb-4 px-5">
                                           <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                                <i class="pi pi-fw pi-users text-4xl text-blue-500"></i>
                                            </span>
                                            <div class="text-900 mb-3 font-medium">nombre</div>
                                             <div class="text-900 mb-3 font-medium">docente</div>
                                             <Button label="Ver grupo"  class="mr-1" @click="openNew"/>                                        </div>
                                        <div class="col-12 md:col-4 mb-4 px-5">
                                           <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                                <i class="pi pi-fw pi-users text-4xl text-blue-500"></i>
                                            </span>
                                            <div class="text-900 mb-3 font-medium">nombre</div>
                                             <div class="text-900 mb-3 font-medium">docente</div>
                                             <Button label="Ver grupo"  class="mr-1" @click="openNew"/>
                                        </div>
                                        <div class="col-12 md:col-4 mb-4 px-5">
                                            <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                                <i class="pi pi-fw pi-users text-4xl text-blue-500"></i>
                                            </span>
                                            <div class="text-900 mb-3 font-medium">nombre</div>
                                             <div class="text-900 mb-3 font-medium">docente</div>
                                             <Button label="Ver grupo"  class="mr-1" @click="openNew"/>                                        </div>
                                        <div class="col-12 md:col-4 md:mb-4 mb-0 px-3">
                                           <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                                <i class="pi pi-fw pi-users text-4xl text-blue-500"></i>
                                            </span>
                                            <div class="text-900 mb-3 font-medium">nombre</div>
                                             <div class="text-900 mb-3 font-medium">docente</div>
                                             <Button label="Ver grupo"  class="mr-1" @click="openNew"/>                                       </div>
                                    </div>
									
                  
                    <!-- Fin del area de trabajo -->
                </div>
                <!-- fin del header y el area de trabajo-->
            </div>
        </div>   
            </div>    
    </div> 
    </div>
</template>
<script>
import Sidebar from '@/components/Sidebar.vue'
import HeaderWorkspace from '../components/HeaderWorkspace.vue'
import GrupoCrud from '../components/GrupoCrud.vue'
import Grupos from '@/service/Grupos'

export default {
    props: [],
    components: {
        Grupos,
    Sidebar,
    HeaderWorkspace
},
    data(){
        GrupoCrud
        return {
          
            
        }
    },
    created(){
        this.Grupos = new Grupos();
    },
    mounted(){
    this.Grupos.getGrupos().then(gruposdata => this.Grupos = gruposdata);
    },
    methods(){

    }
}

</script>

<style>
</style>