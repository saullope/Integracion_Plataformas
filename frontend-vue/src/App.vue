<template>
  
  <router-view/>

</template>

<script>

export default {

  commponents: {

  },
  data(){
    return {
      msg: "Hola"
    }
  },
 mounted() {
let userwayscript = document.createElement('script')
userwayscript.setAttribute('src', 'https://cdn.userway.org/widget.js')
userwayscript.setAttribute('data-account', 'idtDhWyQBz')
userwayscript.setAttribute('id', 'userway-widget-adding-by-vue')
document.head.appendChild(userwayscript)
},
beforeDestroy() {
// Quitando el widget de la aplicacion antes de destruir
let el = document.getElementById('userway-widget-adding-by-vue')
if (el) el.remove();
},
computed(){

},

  methods: {
    }
  }


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.f-blue {
  background: rgb(160, 206, 242);
}
</style>
