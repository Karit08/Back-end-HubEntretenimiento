const express = require('express');
const { sql, poolPromise } = require('./src/db');
//const bcrypt = require('bcrypr');
const { route } = require('./src/routes');
const app = express();

const port = process.env.Port || 3000;

app.use(express.json());


app.use('/', route);


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});



