<template>
<div>
    <div class="container">
        <div class="grid-fluid"></div>

        <div>
            <Button @click="validar" class="p-button-success" label="Validar Credenciales"/>
            <InputText class="ml-2" v-model="credencial" :disabled="habilitar"/>
            <Button class="ml-2" label="Comprobar" :disabled="habilitar"/>
        </div>
    </div>
            <Toolbar>
                 <template #start>
                    <div class="grid">
                        <div class="col-4"></div>
                        <div class="col-4">
                            <Button @click="prev" label="Atras" icon="pi pi-angle-left" icon-pos="left"/>
                        </div>   
                        <div class="col-4">
                            <Button @click="next" label="Siguiente" icon="pi pi-angle-right" icon-pos="right"/>
                        </div>
                        <div class="col-4"></div>
                    </div>
                    </template>
            </Toolbar>
</div>
</template>

<script>

export default {

    data(){
        return {
            habilitar: false,
            API_KEY: '5fd72b0f34e0a9e0f3ee831095f1cd0a',
            credencial: null
            
        }
    },

    methods :{
        next() {
                    this.$router.push('/jotform/workspace')
                },
        prev() {
                    this.$router.push('/jotform/')
                },
        validar(){
            this.credencial = this.API_KEY;
            this.habilitar = true;
        }
    }

}
</script>