import express from 'express'
import config from './config'
import bodyParser from 'body-parser'
import cors from 'cors'
import docenteRoutes from './routes/docente.routes'

const app = express();

//configuraciones del puerto
app.set('port', config.port);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded( {extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(docenteRoutes);

export default app