// APP es el servidor
import express from "express";
//ayuda a ver las peticiones
import morgan from "morgan";
import authRoutes from './Routes/auth.routes.js'
import dashboard from './Routes/dashboard.routes.js'
import productos from './Routes/producto.routes.js'
import detalleVenta from './Routes/detventa.routes.js'
import cookieParser from "cookie-parser";

// import { pool } from "./db.js";

// export const queri = async () => {
//     let result = await pool.query("select * from roles")
//     return result.rows
// }

const app = express()
//usar morgan con su configuracion dev pqra ver en consola las peticiones que hagamos 
//middelwares
app.use(morgan('dev')) 
// este middelware se usa para interpretar los datos que el cliente envia en formato json
app.use(express.json())
//convierte las cookies en formato json 
app.use(cookieParser())
//hacer que en las rutas a usar precedan de un prefijo
app.use("/api",authRoutes);
app.use("/api", productos);
app.use("/api", detalleVenta)
export default app;