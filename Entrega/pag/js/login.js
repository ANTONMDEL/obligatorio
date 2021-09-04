
const userNom = document.getElementById("user");
const password = document.getElementById("contraseña");
const form = document.getElementById("login");

form.addEventListener("submit", function(event){event.preventDefault();

let users = Array(
    {
        usuario: userNom.value,
       // contraseña: password.value,

    }
)
localStorage.setItem("nameUser"), JSON.stringify(users);

});




function salvarUser() {
    let user = document.getElementById("user").value;
    localStorage.setItem('user', user);
    location.href = "home.html";

   
   }


function borrarUser(){
    localStorage.removeItem("user");
    location.href='index.html';
}; 


  /* function registro(){
    let nuevo= document.getElementById("benvenuto")
      if (nuevo != null){
        alert("Su usuario fue creado con exito");
    } else {
        alert("No ");
    }
   
}  */





//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {

});  
