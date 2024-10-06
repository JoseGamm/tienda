// Inventario de productos electrónicos
const inventario = [
    { item: "Portátil", costo: 15000 },
    { item: "Teclado Mecánico", costo: 1200 },
    { item: "Pantalla", costo: 7000 },
    { item: "Ratón", costo: 500 },
    { item: "Silla Gamer", costo: 3000 }
];

// Función para obtener productos dentro de un rango de precios
const obtenerPorRangoDePrecio = (precioMinimo, precioMaximo) => {
    return inventario.filter(prod => prod.costo >= precioMinimo && prod.costo <= precioMaximo);
};

// Función para buscar productos por su nombre
const encontrarPorNombre = (nombreBuscado) => {
    return inventario.filter(prod => prod.item.toLowerCase().includes(nombreBuscado.toLowerCase()));
};

// Función para actualizar la lista de productos en la interfaz
const actualizarListaProductos = (productosFiltrados) => {
    const listaElementos = document.getElementById('lista-productos');
    listaElementos.innerHTML = ''; // Vaciamos la lista existente

    if (productosFiltrados.length === 0) {
        listaElementos.innerHTML = `<li>No se encontraron productos disponibles</li>`;
        return;
    }

    // Agregamos los productos filtrados a la lista
    productosFiltrados.forEach(prod => {
        const elementoLi = document.createElement('li');
        elementoLi.textContent = `${prod.item} - $${prod.costo}`;
        listaElementos.appendChild(elementoLi);
    });
};

// Manejo del formulario para filtrar por precio
document.getElementById('form-filtrar').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    // Recoger valores de precio
    const precioMinimo = parseInt(document.getElementById('precio-min').value);
    const precioMaximo = parseInt(document.getElementById('precio-max').value);

    // Filtrar productos y actualizar la lista
    const productosFiltrados = obtenerPorRangoDePrecio(precioMinimo, precioMaximo);
    actualizarListaProductos(productosFiltrados);
});

// Manejo del formulario para buscar por nombre
document.getElementById('form-buscar').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    // Obtener el nombre buscado
    const nombreBuscado = document.getElementById('buscar-nombre').value;

    // Encontrar productos por nombre y actualizar la lista
    const productosFiltrados = encontrarPorNombre(nombreBuscado);
    actualizarListaProductos(productosFiltrados);
});

