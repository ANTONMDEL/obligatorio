const CATEGORIES_URL = "http://localhost:3002/node/category/all.json"
const PUBLISH_PRODUCT_URL = "http://localhost:3002/node/product/publish.json";
const CATEGORY_INFO_URL = "http://localhost:3002/node/category/1234.json";
const PRODUCTS_URL = "http://localhost:3002/node/product/all.json";
const PRODUCT_INFO_URL = "http://localhost:3002/node/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "http://localhost:3002/node/product/5678-comments.json";
const CART_INFO_URL = "http://localhost:3002/node/cart/987.json";
const CART_BUY_URL = "http://localhost:3002/node/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

const usernav = document.getElementById("usuario")
const close= document.getElementById("cerrar")

let username= localStorage.getItem('user');

if (username !=null){
    usernav.innerHTML = '<a class="py-2 d-none d-md-inline-block" href="#" id="usuario">' + username + '</a>'
    
} 

else {
    usernav.innerHTML =  '<a  href="index.html" class="py-2 d-none d-md-inline-block" href="#" id="usuario"> Iniciar sesion </a>';
}


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});

