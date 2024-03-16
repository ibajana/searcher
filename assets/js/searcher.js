
let datosJson = "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json";
let datosXML = "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.xml";



//Cargamos los datos desde el json
let loadProducts = (datosJson) => {
  fetch(datosJson)
    .then(response => response.json())
    .then(result => {
      result.forEach(element => {
        let { name, type, price, src } = element;

        let template =
          `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                <a href="javascript:;">
                  <h5>
                    ${name}
                  </h5>
                </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
              </div>
            </div>
          </div>`;

        let productos = document.getElementById("productos");
        if (productos) {
          productos.innerHTML += template; // Cambiado de '=' a '+=' para añadir en lugar de reemplazar
          console.log("Product added:", name);
        } else {
          console.error("Element with ID 'productos' not found.");
        }
      });
    })
    .catch(error => {
      console.error("Error fetching or parsing JSON:", error);
    });
};

let loadXML = (datosXML) => {
  fetch(datosXML)
    .then(response => response.text()) //La respuesta se convierte a texto
    .then(
      result => {
        const parser = new DOMParser()
        let xml = parser.parseFromString(result, 'application/xml')
        let listado = xml.getElementsByTagName("product")
        console.log(listado)
        for (let i=0; i<listado.length;i++){
          
          let name = listado[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
          let type = listado[i].getElementsByTagName("type")[0].childNodes[0].nodeValue;
          let price = listado[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
          let src = listado[i].getElementsByTagName("src")[0].childNodes[0].nodeValue;
          
          let template =
          `<div class="col-xl-3 col-md-6 mb-xl-0 mb-4 mt-4">
            <div class="card card-blog card-plain">
              <div class="card-header p-0 mt-n4 mx-3">
                <a class="d-block shadow-xl border-radius-xl">
                  <img src="${src}" alt="${name}" class="img-fluid shadow border-radius-xl">
                </a>
              </div>
              <div class="card-body p-3">
                <p class="mb-0 text-sm">${type}</p>
                <a href="javascript:;">
                  <h5>
                    ${name}
                  </h5>
                </a>
                <p class="mb-4 text-sm">
                  <b>Price: </b> $ ${price}
                </p>
              </div>
            </div>
          </div>`;
          let productos = document.getElementById("productos");
        if (productos) {
          productos.innerHTML += template; // Cambiado de '=' a '+=' para añadir en lugar de reemplazar
          console.log("Product added:", name);
        } else {
          console.error("Element with ID 'productos' not found.");
        }
          
        };
      })      
      .catch(error => {
        console.error("Error fetching or parsing JSON:", error);
      });
  };

loadProducts(datosJson)
loadXML(datosXML)
document.addEventListener("DOMContentLoaded",(e)=>{
  let boton = document.getElementById("filter")
  let productos=document.getElementById("productos")
  
//Se usa el boton para filtrar lo que ya esta escrito
  boton.addEventListener("click",()=>{
    let searcher= document.getElementById("text").value
    productos.querySelectorAll(".col-xl-3").forEach(producto=>{
      producto.textContent.toLowerCase().includes(searcher)
      ? producto.classList.remove("d-none")// se usa d-none propio de bootstrap para ocultar los elementos
      : producto.classList.add("d-none") 
    })
  })

// Se usa el keyup para filtrar a medida que se escribe
  /*searcher.addEventListener("keyup",(e)=>{
    
    if(e.target.matches("#text")){
      document.querySelectorAll(".card-blog").forEach(producto=>{
        producto.textContent.toLowerCase().includes(e.target.value)
        ? producto.classList.remove("d-none")
        : producto.classList.add("d-none")      
      })
    }
      
  })*/
});

  

// Llama a la función para cargar los productos
//loadProducts(datosJson); //cargamos desde el Json
//loadXML(datosXML);

