let carro = {};

function comprarCarro(carri) {
    let htmlContentToAppend = "";
    for (let i = 0; i < carri.articles.length; i++) {


        htmlContentToAppend += `
                <img src="`+ carri.articles[i].src + `">
                  <span>`+ carri.articles[i].name + ` </span>
 <span><input style= "width:1cm; min="0"; type= "number" id="cos" value=">`+ carri.articles[i].count + `"</span>
      <span id="costoSolo">`+ carri.articles[i].unitCost + ` </span>
      <span>`+ carri.articles[i].currency + `</span>
     <span id="sub" >` + carri.articles[i].unitCost * carri.articles[i].count + `</span>
    `
        document.getElementById("jojo").innerHTML = htmlContentToAppend;

    }
}


   document.addEventListener("DOMContentLoaded", function (e) {
          getJSONData(CART_INFO_URL).then(function (resultObj) {
             if (resultObj.status === "ok") {

                carro = resultObj.data;

                comprarCarro(carro);

}

       

document.getElementById('cos').addEventListener('change', function () {
            cantidad0 = parseInt(document.getElementById('cos').value);
            costoUnitario = parseInt(document.getElementById("costoSolo").innerText)
            document.getElementById('sub').innerHTML = cantidad0 * parseInt(costoUnitario);
            subto = document.getElementById("sub").innerText
            document.getElementById("productCostText").innerHTML = parseInt(subto)





        })
    })
});





document.getElementById('goldradio').addEventListener('change', function () {
    subTot = parseInt(document.getElementById("sub").innerText)
    val1 = subTot * 13 / 100
    document.getElementById("comissionText").innerHTML = val1;
    document.getElementById("totalCostText").innerHTML = subTot + val1
});

document.getElementById('premiumradio').addEventListener('change', function () {
    subTol = parseInt(document.getElementById("sub").innerText)
    val2 = subTol * 7 / 100;
    document.getElementById("comissionText").innerHTML = val2;
    document.getElementById("totalCostText").innerHTML = subTol + val2
});

document.getElementById('standardradio').addEventListener('change', function () {
    subTo = parseInt(document.getElementById("sub").innerText)
    val3 = subTo * 3 / 100;
    document.getElementById("comissionText").innerHTML = val3;
    document.getElementById("totalCostText").innerHTML = subTo + val3
});









typ = document.getElementById("ty")

function validacion() {

    if (typ == null) {

        alert('[ERROR] El campo debe tener un valor ');
        return false;
    }

    else if (typ != null) {

        alert('Su compra fue exitosa!');
        return true;
    }

}







// esta funcion es para que todos los campos esten requeridos 
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            document.getElementById("subm").addEventListener('click', function (event) {
                if (document.getElementById("subm").checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();




