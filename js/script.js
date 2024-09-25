//evento para redirigir del login a homepage
const loginForm = document.getElementById('login-form');
const emailField = document.getElementById('email');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailField.value;
    if (email) {
        if (email== 'admin@admin.com'){
            window.location.href = 'homePage.html';
        alert('Redirigiendo al homepage');
        }else{
            window.location.href = 'homePageClient.html';
        alert('Redirigiendo al homepage');
        }

        
    }
});
