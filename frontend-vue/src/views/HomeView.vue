<template>
  <!-- seccion del header navbar -->
<div class="card">
  <div class="shadow-4 flex align-items-stretch card-container blue-container" style="min-height: 100px; width:100%;">
    <div class="flex align-items-center justify-content-center" style="width:100px">
      <ImageTest src="../img/logo.png" alt="" width="75"/>
    </div>
    <div class="flex align-items-center justify-content-center" style="width:270px">
      <h3>Live to Learn, Learn to Live! </h3>
    </div>
    <div class="col-7"></div>
    <div class="flex align-items-center justify-content-end" style="width:200px">
      <ButtonTest @click="seleccionarRol" label="Iniciar Sesion" icon="pi pi-sign-in" class="p-button-primary"></ButtonTest>
    </div>
</div>
</div>
<br><br>
  <!--   ............................  -->
<div class="grid grid-nogutter surface-section text-800">
    <div class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span class="block text-6xl font-bold mb-1">Create the screens your</span>
            <div class="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
            <p class="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            
            <ButtonTest label="Learn More" type="button" class="mr-3 p-button-raised"></ButtonTest>
            <ButtonTest label="Live Demo" type="button" class="p-button-outlined"></ButtonTest>
        </section>
    </div>
    <div class="col-12 md:col-6 overflow-hidden">
        <img src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg" alt="Image" class="md:ml-auto block md:h-full" style="clip-path: polygon(8% 0, 100% 0%, 100% 100%, 0 100%)">
    </div>
</div>

<div style="height:1000px">

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
      mensaje: "Iniciar"
    }
  },

  methods: {
 
    seleccionarRol(){
      this.$router.push('/rol/:67sg4-default-id')
    }
  }
}
</script>
