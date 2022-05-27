const mi = require('./datatable')
const express = require('express')
const app = express()


app.get('/api/obtener', function(req, res) {

    res.send('Bienvenido! Server Corriendo Sin Problemas.')
})

app.get('/api/data', function(req, res){
    res.json(mi.grupos)
})

// configuracion
app.set('port', 3000)
app.listen(app.get('port'), () => {
    console.log(`Server Iniciado en el Puerto ${app.get('port')}`)
})