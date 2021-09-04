## Tienda-on-line
Proyecto E-commerce echo con Javascript Vanilla y Css(Sass) en el marco del programar "Jovenes a programar"

Instalacion del entorno - Node.js

1. Ingresar a https://nodejs.org/en/
1. Ejecutar comandos:<br>
   - git clone <br>
   - npm install <br>
   - cd entrega <br>
   - node app.js.
   
   Abrir en el navegador http://localhost:3002/ .
   
   ### Servidor Node.js 
 
  ```
const express = require('express');
const app = express();
app.use(express.static(__dirname + '/pag/'));
app.listen('3002', function() {
  console.log('Servidor web escuchando en el puerto 3002');
});
```

Para obtener mas informacion sobre Node.js, consulte los siguientes recursos :
- https://nodejs.org/en/

<h2> A mejorar  👇 </h2>
- Responsive Design

<h2>Fin </h2>
