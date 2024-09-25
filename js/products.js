//json que contiene los productos que se van a mostrar en la tabla de stock
const productos = [
    { id: '0001', nombre: 'PRODUCTO 1', cantidad: '0001', valor: '$15,000' },
    { id: '0002', nombre: 'PRODUCTO 2', cantidad: '0001', valor: '$15,000' },
    { id: '0003', nombre: 'PRODUCTO 3', cantidad: '0000', valor: '$15,000' },
    { id: '0004', nombre: 'PRODUCTO 4', cantidad: '0000', valor: '$15,000' },
    { id: '0005', nombre: 'PRODUCTO 5', cantidad: '0000', valor: '$15,000' }
];

//Función para insertar productos en la tabla
function cargarProductos() {
    const tabla = document.getElementById('productTable');
    
    //iterar sobre cada producto y agregar una fila a la tabla
    productos.forEach(producto => {
        let fila = document.createElement('tr');

        //creación de las  columnas para ID, Nombre del producto, Cantidad, y Valor
        let columnaId = document.createElement('td');
        columnaId.textContent = producto.id;

        let columnaNombre = document.createElement('td');
        columnaNombre.textContent = producto.nombre;

        let columnaCantidad = document.createElement('td');
        columnaCantidad.textContent = producto.cantidad;

        let columnaValor = document.createElement('td');
        columnaValor.textContent = producto.valor;

        fila.appendChild(columnaId);
        fila.appendChild(columnaNombre);
        fila.appendChild(columnaCantidad);
        fila.appendChild(columnaValor);

        tabla.appendChild(fila);
    });
}

window.onload = cargarProductos;
