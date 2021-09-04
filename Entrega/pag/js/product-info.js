var productos = {};

function productosDescrip(array) {

    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        //document.getElementById("productImag").innerHTML = htmlContentToAppend;
    }

};


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            productos = resultObj.data;



            let productoNameHTML = document.getElementById("productoName");
            let productoDescriptionHTML = document.getElementById("productoDescription");
            let productoCountHTML = document.getElementById("productoCount");
            let productoCategoryHTML = document.getElementById("productoCriteria");

            productoNameHTML.innerHTML = productos.name;
            productoDescriptionHTML.innerHTML = productos.description;
            productoCountHTML.innerHTML = productos.soldCount;
            productoCategoryHTML.innerHTML = productos.category;


            productosDescrip(productos.images);
        }
        getJSONData(PRODUCTS_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
    
                productoss = resultObj.data;
    
                let htmlContentToAppend = "";
                let array = productos.relatedProducts;
                for (let i = 0; i < array.length; i++) {
                    htmlContentToAppend += `
                    <div class="col-lg-3 col-md-4 col-6">
                    <div class="d-block mb-4 h-100">` + productoss[array[i]].name + `</div>
                            <img class="img-fluid img-thumbnail" src="` + productoss[array[i]].imgSrc + `" alt="">   
                        </div>
                    </div>
                    `
    
    
    
                }
    
                document.getElementById("producRela").innerHTML = htmlContentToAppend;
            }
        });
    }); 
});



function mostrarComentarios(array) {

    function estrella(n) {
        let puntuacion = "";
        puntuacion += ` <span class="fa fa-star checked"></span>`.repeat(n);
        puntuacion += `<span class="fa fa-star"></span>`.repeat(5 - n);
        return puntuacion;
    }


    let htmlContentToAppend = "";

    for (let i = 0; i < array.length; i++) {
        let coments = array[i];



        htmlContentToAppend += `
        <a href= "product-info.html" >
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <p> `  + coments.user + " <br>" + coments.description + " <br>" + estrella(coments.score) + " <br>" + coments.dateTime + ` </p>
                </div>        
            </div>
        </div>
        `
    }

    document.getElementById("produc").innerHTML = htmlContentToAppend;
};




const comentario = document.getElementById("cajat")
const form = document.getElementById("form")

let userCom = Array(
    {
        userComm: comentario.value,
    }

);

let sc = document.getElementById("enviar").value;
localStorage.setItem('comen', sc);



//const comenta = document.getElementById("comentat");
let comint = localStorage.getItem("coment");

function salvarComen() {

    if (comint != null) {
        document.getElementById("comentat").innerHTML =
            `
        <a href= "product-info.html" >
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <p> ` + username[0].user + comint[0] + " <br>"  ` </p>
                </div>        
            </div>
        </div>
        `

    }
};








document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {

            comentarios = resultObj.data;




            mostrarComentarios(comentarios);

        }
    });
});


