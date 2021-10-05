import express from 'express'
import config from './config'
import alumnoRoutes from './routes/alumno.routes'

const app = express()

//configurar puerto
app.set('port', config.port)

app.use(alumnoRoutes)

export default app;