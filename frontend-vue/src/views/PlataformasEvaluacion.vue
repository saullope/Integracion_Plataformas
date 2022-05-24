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
    </div>
    THIS IS PLATAFORMS VIEW
</template>

<script>

import { items } from '../elementos/sidebar.js'

export default {
    name: "PlataformasEvaluacion",
    props: [],
    components: {

    },
    data(){
        return {
            visibleLeft: false,
            items
        }
    }
}
</script>