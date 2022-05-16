<template>
        
    <PanelTest class="justify-content-center">
    
        <div class="card shadow-4 border-round" >
            <div class="flex justify-content-center flex-wrap card-container blue-container">
                <div class="flex align-items-center justify-content-center">
                    <h2 class="font-medium">¿Cómo Deseas Iniciar?</h2>
                </div>
                <br>
                <div class="flex align-items-center justify-content-center w-12rem">
                    <ButtonTest @click="regresar" label="Regresar" icon="pi pi-arrow-left" class="p-button-rounded p-ripple" type="button"></ButtonTest>
                </div>    
            </div>
            <p class="text-black"><strong>Te ayuderamos a iniciar, elige un tipo de cuenta.</strong></p>

            <div class="shadow-4 mt-5 flex justify-content-center flex-wrap card-container blue-container">

                <div class="mr-5 mb-5 flex align-items-center justify-content-center cursor-pointer" >
                    <div class=" w-20rem border-round">
                        <h2>Estudiantes</h2>
                        <ButtonTest style="background:white" class="hover:border-700 w-740px p-ripple" >
                            <ImageTest src="../img/estudiantes_rol.PNG" alt="Imagen ilustrativa de niños" />
                        </ButtonTest>
                    </div>
                </div>
                <div class="ml-5 mb-5 flex align-items-center justify-content-center cursor-pointer">
                    <div class="w-20rem border-round">
                        <h2>Docente</h2>
                        <ButtonTest @click="goLoginDocente" style="background:white" class="hover:border-700 w-740px p-ripple" >
                            <ImageTest src="../img/profesor_rol.PNG" alt="Imagen ilustrativa de niños" />
                        </ButtonTest>
                    </div>
                </div>
            </div>

            
        </div>       
    </PanelTest>
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
