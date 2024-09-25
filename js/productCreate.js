document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('productName').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const size = document.getElementById('size').value;
    const description = document.getElementById('description').value;

    if (!productName || !price || !stock || !size || !description) {
        alert('Todos los campos deben estar llenos');
        return;
    }

    alert(`Producto creado: ${productName}`);

    //Timer para esperar a que cierren la alerta
    setTimeout(function() {
        window.location.href = 'products.html';
    }, 100); 
});

// evento click para ir a la pantalla de productos
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll("");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "products.html"; 
        });
    });
});
