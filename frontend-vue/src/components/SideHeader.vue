<template>
    <div>
    <ConfirmDialog></ConfirmDialog>
    <Sidebar v-model:visible="visibleLeft" class="p-sidebar-sm" width="10px">
        <h2 class="text-center"> <i class="pi pi-home"></i> <strong>HOME</strong></h2>
        <PanelMenu :model="items"/>   
    </Sidebar>
    <!-- header de opciones -->
    <div class="card mt-0 col-12 shadow-2 fixed surface-50">
        <div class="field mb-0">
            <div class="flex justify-content-start flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center font-bold text-white border-round m-2 ml-5">
                <Button icon="pi pi-bars" @click="visibleLeft = true" />
            </div>
            <div class="col">
            </div>
            <div class="flex justify-content-end flex-wrap card-container green-container">
            <div class="flex align-items-center justify-content-center font-bold text-white border-round m-2 mr-5">
                <SplitButton label="SL" class="p-button-rounded p-button-success" :model="account_options"></SplitButton>>
            </div>
        </div>

        </div>
        
    </div>
    </div>
    <!-- fin del header -->

    <!-- Cuerpo de la vista -->
    <!-- Fin del cuerpo de la vista -->

    </div>
</template>

<script>
//import { items } from '../elementos/sidebar.js'

export default {

    props:{
        
    },
    components:{
    
    },
    data(){
        return {
            visibleLeft: false,
  //          items,
            account_options : [
                {
                    label: "Informacion Personal",
                    icon: "pi pi-user"
                },
                {
                    label: "Cerrar Session",
                    icon: "pi pi-sign-out",
                    command: () => {
                        this.$confirm.require({
                        message: '¿Seguro quieres salir?',
                        header: 'Cerrar Session',
                        icon: 'pi pi-exclamation-triangle',
                        accept: () => {
                            window.location.href="http://localhost:8080/loginDoc"
                        },
                        reject: () => {
                        //callback to execute when user rejects the action
                        }
            });
                    }
                }
            ] 
        }
    }
}
</script>