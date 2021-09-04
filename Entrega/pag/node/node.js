var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

app = express(),

  /* archivo 1 */
app.get('/cart/654.json', (req, res) => {
    console.log(res)

  
    
    res.sendFile(path.join(__dirname, '/cart', '654.json'));
  });


  app.get('/cart/buy.json', (req, res) => {
    console.log(res)

  
    
    res.sendFile(path.join(__dirname, '/cart', 'buy.json'));
  });




  /* archivo 2 */
  app.get('/hola', (req, res) => {
    console.log(res)

  
    
    res.sendFile(path.join(__dirname, '/cart', '987.json'));
  });

  
  
  app.listen(1000,() => {console.log("bien")} );
  
 

  
  



  /* PRUEBA SEGUNDO ARCHIVO CATEGORY  */


  var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs');

app = express()

app.get('/category/1234.json', (req, res) => {
  console.log(res)


  
  res.sendFile(path.join(__dirname, '/category', '1234.json'));
});



app.listen(3000,() => {console.log("bien")} );

  

