const sql = require('mssql');
require('dotenv').config();


const config = {
  user: process.env.DB_User,
  password: process.env.DB_Password,
  server: process.env.DB_Server, 
  database: process.env.DB_Database,
  port: parseInt(process.env.DB_Port),
  options: {
    encrypt: true,
    enableArithAbort:true,
    trustServerCertificate: true 
  }
};


const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Conectado a SQL Server');
    return pool;
  })
  .catch(err => {
    console.error('Error al conectar a SQL Server', err);
    process.exit(1);
  });

module.exports = {
  sql,
  poolPromise
};

/*const express = require('express');
const { poolPromise, sql } = require('./db'); // Importar configuración de DB

const app = express();
const port = 3000;

app.use(express.json());

// Ruta para obtener datos desde SQL Server
app.get('/api/datos', async (req, res) => {
  try {
    const pool = await poolPromise;
    const result = await pool.request().query('SELECT * FROM tu_tabla');
    res.json(result.recordset);
  } catch (err) {
    console.error('Error al consultar la base de datos', err);
    res.status(500).send('Error al consultar la base de datos');
  }
});

// Ruta para insertar datos en SQL Server
app.post('/api/datos', async (req, res) => {
  const { columna1, columna2 } = req.body;
  try {
    const pool = await poolPromise;
    await pool.request()
      .input('columna1', sql.NVarChar, columna1)
      .input('columna2', sql.Int, columna2)
      .query('INSERT INTO tu_tabla (columna1, columna2) VALUES (@columna1, @columna2)');
    res.status(201).send('Datos insertados correctamente');
  } catch (err) {
    console.error('Error al insertar datos en la base de datos', err);
    res.status(500).send('Error al insertar datos en la base de datos');
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
*/