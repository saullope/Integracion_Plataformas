<template>
<div>
    <div class="grid">
        <div class="col">
            <Button @click="addForm" label="Crear Formulario"/>
            <h5>{{formID}}</h5>
        </div>
        <div class="col" id="formHere"></div>
    </div>
</div>
</template>

<script>
import axios from 'axios';


export default {
    data(){
        return {
            apikey: '5fd72b0f34e0a9e0f3ee831095f1cd0a',
           //generarUrl : formID => `https://api.jotform.com/form/${formID}?apiKey=${apikey}`
            formID: null
        }
    },
    mounted() {
        let JotFormAnywhere = document.createElement("script");
        JotFormAnywhere.setAttribute("src", "//js.jotform.com/JotFormAnywhere.js");
        document.head.appendChild(JotFormAnywhere);

    },
    computed() {
    },
    methods : {
        addForm() {

            try{
            JotformAnywhere.launchFormBuilder({
                insertTo : "#formHere",
            });

                        this.getFormDetails(this.formID)
            }catch(err){
                console.log("No se cargo la imagen")
            }


        },
        cambiarDespues(){
            this.credencial = this.API_KEY
            this.habilitarKey = true
            this.habilitar = false
           // const generateUrl = formID => `https://api.jotform.com/form/${formID}?apiKey=${config.apiKey || localStorage.getItem('JF-apiKey')}`;
        },
        getFormDetails(formID){
            
            const generateUrl = `https://api.jotform.com/form/${formID}?apiKey=5fd72b0f34e0a9e0f3ee831095f1cd0a`

            axios.get(generateUrl, formID)
            .then(response => {
                if(response.status === 200) {
                    console.log("Form details: ", response.data.content.id);

                    return;
                }
            })
            .catch((err) => {
                console.log("Error: ", err)
            })

            }
        }
    }

</script>