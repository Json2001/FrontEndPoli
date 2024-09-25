// evento click para cerrar sesión
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll("#closeSession");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    });
});

// evento click para ir a los productos en stock
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll("#stockContent");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "products.html";
        });
    });
});

// evento click para ir a gestion de clientes
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll("#userGestion");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "userGestion.html";
        });
    });
});

// evento click para ir a la creación de productos
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll("#createProduct");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "productCreate.html";
        });
    });
});


// evento click para ir a la lista de productos del cliente
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll("#listaProducts");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "productsClient.html";
        });
    });
});

// evento click para ir al detalle del producto seleccionado
document.addEventListener("DOMContentLoaded", function() {
    const destacados = document.querySelectorAll(".cascoDetail");
    destacados.forEach(function(destacado) {
        destacado.addEventListener("click", function() {
            window.location.href = "itemDetail.html";
        });
    });
});
