// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const card = require("./data/data.json");

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json());

// Arrancamos el servidor en el puerto 4000
const serverPort = 4000;
server.listen(serverPort, () => {
    console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post("/card", (req, res) => {
    console.log(req.body.name);
    const response = {}
    if (req.body.name === '') {
        response.success = false;
        response.error = 'El campo Nombre es incorrecto';
    }
    else if (req.body.job === '') {
        response.success = false;
        response.error = 'El campo Puesto es incorrecto';
    }
    else if (req.body.email === '') {
        response.success = false;
        response.error = 'El campo email es incorrecto';
    }
    else if (req.body.linkedin === '') {
        response.success = false;
        response.error = 'El campo Linkedin es incorrecto';
    }
    else if (req.body.github === '') {
        response.success = false;
        response.error = 'El campo Github es incorrecto';
    }
    else if (req.body.photo === '') {
        response.success = false;
        response.error = 'Falta seleccionar una imagen';
    }
    else {
        response.success = true;
        response.cardURL = 'https://awesome-profile-cards.herokuapp.com/card/19591613152820696';
    }
    res.json(response);
});