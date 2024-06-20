const productos = [ 
    { ID: 1, foto:"el_beso.jpg", nombre: "El Beso", artista: "Gustav Klimt", precio: 420 }, 
    { ID: 2, foto:"el_jardin_de_las_delicias.jpg", nombre: "El jardín de las delicias", artista: "Jheronimus Bosch", precio: 250 }, 
    { ID: 3, foto:"el_nacimiento_de_venus.jpg", nombre: "El nacimiento de Venus", artista: "Botticelli", precio: 270 }, 
    { ID: 4, foto:"guernica.jpg", nombre: "Guernica", artista: "Pablo Picasso", precio: 480 }, 
    { ID: 5, foto:"la_joven_de_la_perla.jpg", nombre: "La joven de la perla", artista: "Johannes Vermeer", precio: 280 }, 
    { ID: 6, foto:"la_noche_estrellada.jpg", nombre: "La noche estrellada", artista: "Vincent Van Gogh", precio: 520 }, 
    { ID: 7, foto:"la_ronda_de_noche.jpg", nombre: "La ronda de noche", artista: "Rembrandt van Rijn", precio: 260 }, 
    { ID: 8, foto:"la_ultima_cena.jpg", nombre: "La última cena", artista: "Leonardo Da Vinci", precio: 500 }, 
    { ID: 9, foto:"las_dos_fridas.webp", nombre: "Las dos Fridas", artista: "Frida kahlo", precio: 340 }, 
    { ID: 10, foto:"las_meninas.jpg", nombre: "Las meninas", artista: "Diego Velázquez", precio: 340 } 
]

$(document).ready(function () {

    const productContainer = $("#product-list");
    productos.forEach(product => {
        const productItem = `
        <article class="sc-product-item thumbnail producto p-2 d-flex bg-body-tertiary rounded">
                <img src="./img/pictures/galeria/${product.foto}" alt="${product.nombre}" class="w-50 rounded"data-name="product_image">
                <div class="w-50 ms-3 caption">
                    <h4 data-name="product_name" class="mb-0">${product.nombre}</h4>
                    <p data-name="product_desc" class="mb-0">${product.artista}</p>
                    <hr class="line my-1">
                    <div class="d-flex flex-column justify-content-around h-75">
                        <form action="">
                            <div class="form-group ">
                                <label>Tamaño: </label>
                                <select name="product_size" class="form-select form-select-sm input-sm bg-dark text-light w-75">
                                    <option>A3</option>
                                    <option>A4</option>
                                    <option>Oficio</option>
                                </select>
                            </div>
                            <div class="form-group2">
                                <label>Cantidad:</label><br>
                                <input class="sc-cart-item-qty bg-dark text-light w-75" name="product_quantity" min="1" value="1" type="number">
                            </div>
                        </form>
                        <div class="d-flex justify-content-between h-25">
                            <input name="product_price" value="${product.precio}" type="hidden" />
                            <input name="product_id" value="${product.ID}" type="hidden" /> 
                            <h4 class="precio"><strong class="price">$${product.precio}</strong></h4>
                            <button class="sc-add-to-cart btn btn-success btn-sm">Comprar</button>
                        </div>
                    </div>
                </div>
            </article>
    `;

        productContainer.append(productItem);
    })

    $('#smartcart').smartCart({
        lang: {  
            cartTitle: "Carrito",
            checkout: 'Pagar',
            clear: 'Borrar',
            subtotal: 'Subtotal:',
            cartRemove:'×',
            cartEmpty: 'El carrito está vacío!<br />Elegí los productos que quieras.'
            },            
    })
}
)
