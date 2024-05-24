document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    let hasError = false;

    if (nombre === '') {
        showError('nombre', 'Por favor, ingresa tu nombre y apellido');
        hasError = true;
    }

    if (email === '') {
        showError('email', 'Por favor, ingresa tu correo electrónico');
        hasError = true;
    } else if (!validateEmail(email)) {
        showError('email', 'Por favor, ingresa un correo electrónico válido');
        hasError = true;
    }

    if (mensaje === '') {
        showError('mensaje', 'Por favor, ingresa tu mensaje');
        hasError = true;
    }

    if (!hasError) {

        this.submit();
    }
});

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    errorElement.textContent = message;
    errorElement.style.display = 'block';

    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);

    document.getElementById(fieldId).addEventListener('input', function() {
        errorElement.style.display = 'none';
    });
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(function(errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

