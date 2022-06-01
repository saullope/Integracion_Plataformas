<template>
  <!-- seccion del header navbar -->
<div class="card">
  <div class="shadow-4 flex align-items-stretch card-container blue-container" style="min-height:70px; width:100%;">
    <div class="flex align-items-center justify-content-center" style="width:100px">
      <Image src="../img/logo.png" alt="" width="75"/>
    </div>
    <div class="flex align-items-center justify-content-center" style="width:270px">
      <h4>Live to Learn, Learn to Live! </h4>
    </div>
    <div class="col"></div>
    <div class="flex align-items-center justify-content-center">
      <Menubar :model="items">

      </Menubar>
    </div>
    <div class="flex align-items-center justify-content-end" style="width:200px">
      <Button @click="seleccionarRol" label="Iniciar Sesion" icon="pi pi-sign-in" class="p-button-primary" />
    </div>
</div>
</div>
<br><br>
  <!--   ............................  -->
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">"Sistema Web de Integración de Plataformas de Evaluación."
</span>
            <div class="text-6xl font-bold mb-3"></div>
            <p class="mt-0 mb-4 text-700 line-height-3">Sistema Web de Integración de Plataformas para la Evaluación Educativa de los Estudiantes de Primaria de St. Mary School.</p>
            
            <Button label="Aprende mas!" type="button" class="p-button-outlined" />
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="../assets/hero_image.png" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)" >
    </div>
</div>

<div style="height:1000px; background-color: #ABBAEA;">

</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
   
  },
  data () {
    return {
      mensaje: "Iniciar",

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

  methods: {
 
    seleccionarRol(){
      this.$router.push('/rol/:67sg4-default-id')
     
    }
  },

}
</script>
