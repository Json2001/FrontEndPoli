const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = registerForm.nombre.value;
    const telefono = registerForm.telefono.value;
    const tipoDocumento = registerForm.tipo_documento.value;
    const documento = registerForm.documento.value;
    const correo = registerForm.correo.value;
    const direccion = registerForm.direccion.value;
    const departamento = registerForm.departamento.value;
    const municipio = registerForm.municipio.value;

    if (nombre && telefono && tipoDocumento && documento && correo && direccion && departamento && municipio) {
        alert('Registro exitoso. Redirigiendo a la página de confirmación...');

        // Simulación  la redirección a la homepage
        window.location.href = 'homePage.html';
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
