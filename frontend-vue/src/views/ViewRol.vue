<template>
    <div class="contenedor-padre" style="background-color:white;">

            
    <div class="justify-content-center bg-blue-50">
    
        <div class="card shadow-4 border-round" >
            <div class="flex justify-content-center flex-wrap card-container blue-container">
                <div class="flex align-items-center justify-content-center">
                    <h2 class="font-medium">¿Cómo Deseas Iniciar?</h2>
                </div>
                <br>
                <div class="flex align-items-center justify-content-center w-12rem">
                    <Button @click="regresar" label="Regresar" icon="pi pi-arrow-left" class="p-button-rounded p-ripple" type="button" />
                </div>    
            </div>
<!--
                <p class="text-black"><strong>Te ayuderamos a iniciar, elige un tipo de cuenta.</strong></p>

-->
            <div class="shadow-4 mt-5 flex justify-content-center flex-wrap card-container blue-container">

                <div class="mr-5 mb-5 flex align-items-center justify-content-center cursor-pointer" >
                    <div class=" w-20rem border-round">
                        <h2>Estudiantes</h2>
                        <Button style="background:white" class="hover:border-700 w-740px p-ripple" >
                            <Image src="../img/kids_account.jpg" alt="Imagen ilustrativa de niños" width="300" height="300"/>
                        </Button>
                    </div>
                </div>
                <div class="ml-5 mb-5 flex align-items-center justify-content-center cursor-pointer">
                    <div class="w-20rem border-round">
                        <h2>Docente</h2>
                        <Button @click="goLoginDocente" style="background:white" class="hover:border-700 w-100px p-ripple" >
                            <Image src="../img/teacher.jpg" alt="Imagen ilustrativa de niños" width="300" />
                        </Button>
                    </div>
                </div>
            </div>

            
        </div>       
    </div>
    <br>
    <br>
    Texto alternativo
    </div>
</template>

<script>

export default {

    methods: 
    {
        salut(){
            console.log("Funcionando!")
        },

        regresar(){
            this.$router.push('/')
        },

        goLoginDocente(){
            this.$router.push('/loginDoc')
        }

    }
}
 
</script>
<style>
    #contenedor-padre {
        background-color: blueviolet;
    }
</style>