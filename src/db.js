// base de datos
import pkg from "pg";
import { Sequelize } from "sequelize";
import { config } from "dotenv";
const { Pool } = pkg;

config();



// Option 1: Passing a connection URI
export const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: 'true'
      }
    }
  }); // Example for postgres

// Coloca aquí tus credenciales
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
// export const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "laslugo",
//   password: "Brayan_25",
//   port: 5432,
// });
