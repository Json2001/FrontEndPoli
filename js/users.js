//json que contiene los productos que se van a mostrar en la tabla de stock
const productos = [
    { id: '0001', nombre: 'Pedro Perez', identification: '111111111', TipoDoc: 'CC' },
    { id: '0002', nombre: 'Ana Navas', identification: '111111112', TipoDoc: 'CC' },
    { id: '0003', nombre: 'Cristian Lopez', identification: '111111113', TipoDoc: 'CE' },
    { id: '0004', nombre: 'Yahir Garzon', identification: '111111114', TipoDoc: 'CC' },
    { id: '0005', nombre: 'Diego Cortez', identification: '111111115', TipoDoc: 'CC' }
];

//Función para insertar productos en la tabla
function cargarRegistros() {
    const tabla = document.getElementById('productTable');
    
    //iterar sobre cada producto y agregar una fila a la tabla
    productos.forEach(user => {
        let fila = document.createElement('tr');

        //creación de las  columnas para ID, Nombre del producto, Identification, y Valor
        let columnaId = document.createElement('td');
        columnaId.textContent = user.id;

        let columnaNombre = document.createElement('td');
        columnaNombre.textContent = user.nombre;

        let columnaIdentification = document.createElement('td');
        columnaIdentification.textContent = user.identification;

        let columnaTipoDoc = document.createElement('td');
        columnaTipoDoc.textContent = user.TipoDoc;

        fila.appendChild(columnaId);
        fila.appendChild(columnaNombre);
        fila.appendChild(columnaIdentification);
        fila.appendChild(columnaTipoDoc);

        tabla.appendChild(fila);
    });
}

window.onload = cargarRegistros;
