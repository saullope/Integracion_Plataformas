<template>

<div class="field" style="background-color:#CFDDF5;">
<div height="20px"><br></div>

<div class="flex justify-content-center flex-wrap card-container">
    
    
    <div class="col-5 ">
         <div class="flex justify-content-cente card-container blue-container">
        <div class="surface-card p-5 shadow-4 border-round w-full lg:w-11">
    <div class="text-center mb-5">
        <Image src="../img/logo.png" alt="logo del colegio" height="75" class="mb-3" />
        <div class="text-900 text-3xl font-medium mb-3">Bienvenido Educador</div>
        <span class="text-600 font-medium line-height-3"></span>
        <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"></a>
    </div>

    <div>
    <form @submit="onSubmit">
        
        <span class="p-float-label p-input-icon-left w-full mb-3">
            <i class="pi pi-at" />
            <InputText id="inputtext-email" type="email" class="w-full mb-3" v-model="correo"/>
            <label for="inputtext-email">Email</label>
        </span>
<br>
        <span class="p-float-label p-input-icon-left w-full mb-3 text-dark">
            <i class="pi pi-key" />
            <InputText id="inputtext-password" type="password" class="w-full mb-3" v-model="contrasena"/>
            <label for="inputtext-right">Password</label>
        </span>
        <div class="flex align-items-center justify-content-between mb-6">
            <div class="flex align-items-center">
                <Checkbox id="rememberme1" :binary="true" v-model="checked" class="mr-2" />
                <label for="rememberme1"></label>
            </div>
            <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">¿Olvido su Contraseña?</a>
        </div>

        <Button type="submit" @click="goToPrincipal" label="Iniciar Sesion" icon="pi pi-user" class="w-full" />
        <hr>
        </form>

    </div>


        </div>
    </div>
    </div>
</div>
    
    <div height="20"><br></div>
</div>    

</template>

<script>

export default {
    data(){
        return {
            value1: null,
            correo: null,
            contrasena: null
        }
    },
    computed: {
        
    },

    methods: {
        goToPrincipal(){
            this.$router.push('/principal')
        }
    }
}
</script>
<style>

</style>