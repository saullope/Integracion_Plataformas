<template>
    <div>
    <SidebarTest v-model:visible="visibleLeft" class="p-sidebar-sm" width="10px">
        <h2 class="text-center"> <i class="pi pi-home"></i> <strong>HOME</strong></h2>
        <PanelMenu :model="items"/>   
    </SidebarTest>
    <!-- header de opciones -->
    <div class="card shadow-2">
        <div class="flex justify-content-start flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center font-bold text-white border-round m-2 ml-5">
                <ButtonTest icon="pi pi-bars" @click="visibleLeft = true" ></ButtonTest>
            </div>
        </div>
    </div>
    <!-- fin del header -->

    <!-- Cuerpo de la vista -->
    <!-- Fin del cuerpo de la vista -->

    </div>
</template>

<script>
import { items } from '../elementos/sidebar.js'

export default {

    props:{
        
    },
    components:{
    
    },
    data(){
        return {
            visibleLeft: false,
            items,
                
        }
    }
}
</script>