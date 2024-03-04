
let datosJson = "https://raw.githubusercontent.com/Bootcamp-Espol/Datos/main/products.json";

let loadProducts = (datosJson) => {
  fetch(datosJson)
    .then(response => response.json())
    .then(result => { 
      result.forEach(element => {
        let {name, type, price, src} = element;

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
    .catch(error =>{
      console.error("Error fetching or parsing JSON:", error);
    });
};

// Llama a la función para cargar los productos
loadProducts(datosJson);

