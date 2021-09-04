
// GUARDAR DATOS EN " MI PERFIL"

const name = document.getElementById("name");
const ape = document.getElementById("apellido");
const telefono = document.getElementById("tel");
const ed = document.getElementById("edad");
const cam = document.getElementById("datosPersonales");


cam.addEventListener("submit", function(event){event.preventDefault();

let datos = 
    {
        nombre: name.value,
        apellido : ape.value,
        telep: telefono.value,
        edad: ed.value,
        



    }

    localStorage.setItem("datosPerfil", JSON.stringify(datos));
     

}); 

var  dp = JSON.parse(localStorage.getItem("datosPerfil"))

if ( dp != null){
    
     name.value = dp.nombre
     ape.value = dp.apellido
     telefono.value= dp.telep
     ed.value = dp.edad
     
 }

 

 


 





