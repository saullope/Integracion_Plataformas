<template>
  <!-- seccion del header navbar -->
<div class="card shadow-3">
  <div class="shadow-4 flex align-items-stretch card-container blue-container" style="min-height:70px; width:100%;">
    <div class="flex align-items-center justify-content-center p-2" style="width:100px">
      <Image src="../img/logo.png" alt="logo del St. Mary School" width="75"/>
    </div>
    <div class="flex align-items-center justify-content-center" style="width:270px">
      <h4>Live to Learn, Learn to Live! </h4>
    </div>
    <div class="col"></div>
    <div class="flex align-items-center justify-content-center">
      <Menubar :model="items">

      </Menubar>
    </div>
    <div class="flex align-items-center justify-content-end p-3" style="width:200px">
      <Button @click="seleccionarRol" label="Iniciar Sesion" icon="pi pi-sign-in" class="p-button-primary" />
    </div>
</div>
</div>

  <!--   ............................  -->
<div class="grid grid-nogutter text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
          <Image src="../img/logo_grande.jpg" />
            <div class="text-6xl font-bold mb-3"></div>
            <p class="mt-0 mb-4 text-700 font-bold line-height-3">Sistema Web de Integración de Plataformas para la Evaluación Educativa.</p>
            
            <label class="text-blue-700 font-bold hover:text-900">¡Un espacio para ti!</label>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="../assets/studiante_educador2.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" >
    </div>
</div>

<div style="height:100px; background-color: #ABBAEA;">

</div>

<FooterMain />
</template>

<script>
// @ is an alias to /src
import FooterMain from '@/components/FooterMain.vue'

export default {
  name: 'HomeView',
  inject : ['myTokenSession'],
  components: {
   FooterMain
  },
  data () {
    return {
      mensaje: "Iniciar",
      msg: this.variableGlobal,    

      items: [
        {
          label: "Institucion",
          icon: "pi pi-fw pi-building"
        },
        {
          label:"Como iniciar",
          icon:"pi pi-fw pi-question"
        },
        {
          label:"Documentacion",
          icon:"pi pi-fw pi-file"
        }
      ]
    }
  },

  mounted(){
  },
  
  methods: {
 
    seleccionarRol(){
      this.$router.push('/rol/:67sg4-default-id')
     
    }
  },

}
</script>
