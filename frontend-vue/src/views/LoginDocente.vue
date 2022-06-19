<template>


<div class="block-content ">
    <div class="px-4 py-8 md:px-6 lg:px-8 f-blue">
        <div class="flex flex-wrap shadow-2">
            <div class="w-full lg:w-6 px-0 py-4 lg:p-6 surface-ground">
                <Image src="../img/fondo_login.jpeg" alt="Image" class="mb-6 ml-3 lg:ml-0" />
                 <div class="mb-3 font-bold text-xl">
        <span class="text-900">Accede a tu Espacio de Trabajo</span><br>
    </div>
    <div class=" text-1xl">
        <span class="text-blue-600">¡Aquí encontraras las herramientas necesarias para crear evaluaciones dinámicas!</span>
    </div>
            </div>
            <div class="w-full lg:w-6 p-4 lg:p-7 surface-card">
                <div class="flex align-items-center justify-content-between mb-7">
                    <span class="text-2xl font-medium text-900">¡Bienvenido Educador!</span>
                </div>
               <!--
            <div v-if="errorlogueo">
                <Message severity="error" :closable="true" >Los datos ingresados no son validos.</Message>
            </div>
-->
                <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-user"></i>
                    </span>
                    <InputText v-model="ingreso.correo" type="email" placeholder="Correo" />
                </div>        
    <br><br>
            <div class="p-inputgroup">
                    <span class="p-inputgroup-addon">
                        <i class="pi pi-key"></i>
                    </span>
                    <InputText v-model="ingreso.contrasena" type="password" placeholder="Password"  />
                </div>
            <div class="flex align-items-center justify-content-between mb-6">
                <br>
            </div>
            
            <Button type="submit" class="p-button p-component w-full font-medium" label="Iniciar Session" icon="pi pi-user" @click="session"/>
            
        </div>
        
    </div>
</div>
</div>

</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            value1: null,
            ingreso : {
                correo: null,
                contrasena: null
            },
            respuesta: [],
            errorlogueo: false,

        }
    },
    mounted(){
        setTimeout(() => {console.log("despues de los 5 segundos")}, 5000)
    },
    computed(){

    },

    methods: {
        hidenError(){
            this.errorlogueo = false
        },
        showError(){
            //this.errorlogueo = true
            //setTimeout(this.hidenError, 5000)
        },
        session(){
            this.hidenError()            
            axios.post("http://localhost:3000/session", this.ingreso)
            .then(response => { this.respuesta = response.data });
            
            if (this.respuesta.length > 0){
                
                console.log(this.respuesta)
                this.$router.push('/principal')
            }else {
            
            }
        }
    }
}
</script>
<style>

</style>