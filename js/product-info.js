var FIAT_PRODUCT_INFO = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
var SUZUKI_PRODUCT_INFO = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
var PEUGEOT_PRODUCT_INFO = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
var CHEVROLET_PRODUCT_INFO = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var product = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let item of array) {
        
        let imageSrc = item;

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showProductInfo (product) {
    
    getJSONData(product).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCategoryHTML = document.getElementById("productCategory");
            let productCostHTML = document.getElementById("productCost");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCategoryHTML.innerHTML = product.category;
            productCostHTML.innerHTML = product.currency + " " + product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

  // Importación del id almacenado al selecciponar el producto 
  var productID = localStorage.getItem("product");
  
  // Control para hacer el llamado a al endpoint correspondiente segun el id almacenado
  if (productID.indexOf = "fiat") {

  }
});