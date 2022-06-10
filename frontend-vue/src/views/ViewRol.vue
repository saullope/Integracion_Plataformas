<template>
<div class="p-4 md:p-4 lg:p-6 bg-blue-100">
    <div class="flex justify-content-center flex-wrap ">
        <div class="shadow-3 border-round surface-card" style="min-height: 20rem; min-width:60rem">
            <div class="p-3">
                <div class="grid p-3">
            <div class="col-12">
                <div class="flex justify-content-center flex-wrap card-container blue-container p-3">
                    <Button @click="regresar" icon="pi pi-arrow-left" label="Regresar" class="p-button-rounded p-button-warning"/>
                </div>
            </div>
            <div class="col-12">
                <div class="flex justify-content-center flex-wrap mt-0">
                    <h2>Elige tu rol...</h2>
                </div>
                <span>Te llevaremos al lugar indicado.</span>
            </div>
        </div>
        <div class="grid">
            <div class="col-6">
                <div class="flex justify-content-end flex-wrap">
                    <Button @click="goLoginDocente" class="p-button-outlined">
                        <Image src="../img/rolteacher.jpeg" />
                    </Button>
                </div>
            </div>
            <div class="col-6">
                <div class="flex justify-content-start flex-wrap">
                    <Button class="p-button-outlined">
                        <Image src="../img/rolstudent.jpeg" />
                    </Button>
                </div>
            </div>
        </div>
            </div>
        </div>
    </div>
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