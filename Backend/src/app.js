import express from 'express'
import config from './config'
import bodyParser from 'body-parser'
import cors from 'cors'
import docenteRoutes from './routes/docente.routes'
import estudianteRoutes from './routes/estudiantes.routes'

const app = express();
 
//configuraciones del puerto
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(docenteRoutes);
app.use(estudianteRoutes)

export default app