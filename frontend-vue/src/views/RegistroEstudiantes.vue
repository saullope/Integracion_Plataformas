<template>
    <SideHeader></SideHeader>
<br><br><br>
    <div class="card">
        <ToastMessage  />
        <br><br>
        <Toolbar class="mb-4">
            <template #start>
                <Button label="Nuevo Estudiante" icon="pi pi-plus" class="mr-2" @click="openModal"/>
            </template>

            <template #end>
            </template>
        </Toolbar>
        <!-- cuerpo del data table -->
        
        <!-- fin del cuerpo del data table -->
    </div>
    <!-- modal para agregar estudiantes -->
    <Dialog header="Header" v-model:visible="displayModal" :style="{width: '50vw'}" :modal="true">
            <p class="m-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <template #footer>
                <Button label="Cancelar" icon="pi pi-times" @click="closeModal" class="p-button-text"/>
                <Button label="Guardar" icon="pi pi-check" @click="saveInfo" autofocus />
            </template>
    </Dialog>
</template>

<script>
import SideHeader from '@/components/SideHeader.vue'

export default {

    components: {
        SideHeader
    }, 
    data(){
        return {
            displayModal: false,
            messages: [],
            
        }
    },
    computed:{
        bindings(){
            return {
                columns:['id','nombre','apellidos'],
                data:[
                    {"id":12, "nombre":"saul isaac", "apellidos":"lopez rios"}
                    ]
            }
        }
    },
    methods: {
        openModal(){
            this.displayModal = true
        },
        closeModal(){
            this.displayModal = false
        },
        saveInfo(){
            this.displayModal = false
            this.$toast.add({severity: 'success', summary: 'Agregado con Exito', detail: 'El estudiante ha sido agregado con exito.', life: 3000});

        }
    }

}
</script>