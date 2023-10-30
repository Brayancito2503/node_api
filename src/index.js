import app from "./app.js";
import { sequelize } from "./db.js";
//import { pool } from "./db.js"; // Asegúrate de que la ruta sea correcta

app.listen(3000);
console.log('server on port', 3000);

// async function main () {
//     try {
//         await sequelize.authenticate();
//         app.listen(3000);
//         console.log('server on port', 3000);
//         console.log('Connection has been established successfully.');
//       } catch (error) {
//         console.error('Unable to connect to the database:', error);
//       }


// }

// main()

// await pool.connect();
// const res = await pool.query("SELECT NOW()")
// console.log(res.rows[0].message);
// await pool.end()




