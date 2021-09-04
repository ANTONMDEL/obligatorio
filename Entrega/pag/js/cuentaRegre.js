const usernav = document.getElementById("usuario")
const close= document.getElementById("cerrar")

let username= localStorage.getItem('user');

if (username !=null){
    usernav.innerHTML = '<a class="py-2 d-none d-md-inline-block" href="#" id="usuario">' + username + '</a>'
    
} 

else {
    usernav.innerHTML =  '<a  href="index.html" class="py-2 d-none d-md-inline-block" href="#" id="usuario"> Iniciar sesion </a>';
}



// cierra sesion

//close.eddEventListener("click",function() {
  //  localStorage.clear('user')
    //location.href="index.html"; 




//console.log(username);


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});


//CUENTA REGRESIVA 
var txtDias= document.getElementById("dias");
var txtHoras= document.getElementById("horas");
var txtMinutos= document.getElementById("minutos");
var txtSegundos= document.getElementById("segundos");


function cuentaRegre(){
    var  hoy= new Date();
    var fin = new Date(2021,08,10);

//convertimos fechas a mili segundos
    var actual = hoy.getTime();
    var evento = fin.getTime();
   
   // calculamos tiempo restante
   var restante= evento - actual    ;
//obtenemos segundos , horas minutos y dias
var segundos= Math.floor(restante/1000);
var minutos= Math.floor(segundos/60);
var horas = Math.floor(minutos/60);
var dias= Math.floor (horas/24);
    

//averiguamos horas restantes/dias 
horas= horas %24 ;
minutos = minutos %60 ;
segundos = segundos %60 ;

//agregamos 0 iniciales

if ( horas< 10){
    horas="0"+ horas ;
}

if ( minutos< 10){
    minutos="0"+ minutos ;
}

if ( segundos<10){
    segundos= "0"+ segundos ;
}


// mostrar datos en las cajas 
txtDias.innerText= dias;
txtHoras.innerText= horas;
txtMinutos.innerText = minutos;
txtSegundos.innerText = segundos;
}

cuentaRegre();


//actualizamos la llamada a la funcion 

setInterval( cuentaRegre , 1000 )



