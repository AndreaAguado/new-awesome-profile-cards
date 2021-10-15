// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const card = require('./data/data.json');
const DataBase = require('better-sqlite3');

// Creamos el servidor
const server = express();
const db = new DataBase('./src/data/database.db', { verbose: console.log });
// Configuramos el servidor
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');
// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  console.log(req.body.name);
  const response = {};
  if (req.body.name === '') {
    response.success = false;
    response.error = 'El campo Nombre es incorrecto';
  } else if (req.body.job === '') {
    response.success = false;
    response.error = 'El campo Puesto es incorrecto';
  } else if (req.body.email === '') {
    response.success = false;
    response.error = 'El campo email es incorrecto';
  } else if (req.body.linkedin === '') {
    response.success = false;
    response.error = 'El campo Linkedin es incorrecto';
  } else if (req.body.github === '') {
    response.success = false;
    response.error = 'El campo Github es incorrecto';
  } else if (req.body.photo === '') {
    response.success = false;
    response.error = 'Falta seleccionar una imagen';
  } else {
    response.success = true;
    response.cardURL =
      'https://awesome-profile-cards.herokuapp.com/card/19591613152820696';
  }
  res.json(response);
});

server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM cards WHERE id=?');
  const data = query.get(req.params.id);
  // hacemos consulta en la base de datos y los pintamos desde la bbdd de 'card', con los datos de data
  res.render('card', data);
});

const staticServerPathWeb = './public';
server.use(express.static(staticServerPathWeb));

//creamos nueva ruta estatica para coger los estilos (siempre los va a coger de esta ruta)
const staticServerPathWeb2 = './src/style';
server.use(express.static(staticServerPathWeb2));
