const express = require('express');
const app = express();
app.use(express.static(__dirname + '/pag/'));
app.listen('3002', function() {
  console.log('Servidor web escuchando en el puerto 3002');
});