<template>
  <!-- seccion del header navbar -->
<div class="card shadow-3">
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

  <!--   ............................  -->
<div class="grid grid-nogutter text-800">
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

<div style="height:100px; background-color: #ABBAEA;">

</div>

<div>
<div class="bg-white-900 px-4 py-8 md:px-6 lg:px-8"><div class="grid"><div class="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3"><img src="" alt="Image"></div><div class="col-12 md:col-3"><div class="text-dark text-lg mb-4 flex flex-wrap" style="max-width: 290px;">Jacob Obrechtstraat 5, 1071 KC Amsterdam The Netherlands</div><div class="text-dark mb-3"><i class="pi pi-phone border-round p-1 mr-2"></i>(31) 20 779 8986</div><div class="text-dark mb-3"><i class="pi pi-inbox border-round p-1 mr-2"></i>hello@alfred.co</div></div><div class="col-12 md:col-3 text-dark-200"><div class="text-dark font-bold line-height-3 mb-3">Company</div><a class="line-height-3 block cursor-pointer mb-2">About Us</a><a class="line-height-3 block cursor-pointer mb-2">News</a><a class="line-height-3 block cursor-pointer mb-2">Investor Relations</a><a class="line-height-3 block cursor-pointer mb-2">Careers</a><a class="line-height-3 block cursor-pointer">Media Kit</a></div><div class="col-12 md:col-3 text-dark-200"><div class="text-dark font-bold line-height-3 mb-3">Resourses</div><a class="line-height-3 block cursor-pointer mb-2">Get Started</a><a class="line-height-3 block cursor-pointer mb-2">Learn</a><a class="line-height-3 block cursor-pointer">Case Studies</a></div></div></div>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  inject : ['myTokenSession'],
  components: {
   
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
