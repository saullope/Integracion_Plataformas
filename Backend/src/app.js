import express from 'express'
import config from './config'
import docenteRoutes from './routes/docente.routes'

const app = express()

//configuraciones del puerto
app.set('port', config.port)
app.use(docenteRoutes)

export default app