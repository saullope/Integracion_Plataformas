<template>

    <SidebarTest v-model:visible="visibleLeft" class="p-sidebar-sm" width="10px">
        <h2 class="text-center"> <i class="pi pi-home"></i> <strong>HOME</strong></h2>
        <PanelMenu :model="items"/>   
    </SidebarTest>
    <div class="card">
        <div class="flex flex-row flex-wrap card-container blue-container">
        
       <div class="col">
            <ButtonTest icon="pi pi-bars" @click="visibleLeft = true" ></ButtonTest>
        </div>
    </div>
    THIS IS THE PRINCIPAL VUE OF REGISTER
    </div>

    <!-- jsjsjsjsjsj -->
    <div class="grid">
        <div class="col-8">
            este es de 8
        </div>
        <div class="col-4">
            este es de 4
        </div>
    </div>
    
</template>
<script>
import { items } from '../elementos/sidebar.js'

export default {
    props: [],
    components: {},
    data(){
        return {
            visibleLeft: false,
            items
        }
    }
}

</script>