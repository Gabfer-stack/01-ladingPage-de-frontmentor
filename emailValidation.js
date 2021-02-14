const formSignup = document.getElementById('form-signup');
const emailInput = document.getElementById('email');

formSignup.addEventListener('submit', (e) => {
    e.preventDefault();
    const alertError = document.getElementById('alert-error');
    const {value:emailValue} = emailInput;

    if(!emailValue.includes('@') || !emailValue.includes('.com')) {
        alertError.innerHTML = '<span class="alert-error">Please enter a valid email adress</span>'
    }
    else {
        alertError.innerHTML = '<span class="alert-success">successful shipment</span>'
    }
});