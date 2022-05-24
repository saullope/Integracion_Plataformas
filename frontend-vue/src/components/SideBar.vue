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
</template>

<script>

export default {

    props:{
        
    },
    components:{
    
    },
    data(){
        return {
            
            items: [
                {
                    label: "Opcion1",
                    icon: "pi pi-fw pi-file",
                    items:[
                        {
                            label: "Otra opcion",
                            icon: "pi pi-fw pi-trash"
                        },
                        {
                            label: "Otra opcion",
                            icon: "pi pi-fw pi-pencil"
                }

                    ]
                },
                {
                    label: "Opcion2",
                    icon: "pi pi-fw pi-file"
                },
                {
                    label: "Opcion3",
                    icon: "pi pi-fw pi-chart-bar"
                },
                {
                    label: "Opcions4",
                    icon: "pi pi-fw pi-file"
                },
                {
                    label: "Opcion5",
                    icon: "pi pi-fw pi-file"
                },
                {
                    label: "Opcion6",
                    icon: "pi pi-fw pi-file"
                },
                {
                    separator: true
                },
                {
                    label: "Cerrar Session",
                    icon: "pi pi-fw pi-sign-out"
                }
                ]   
             
        }
    }
}
</script>