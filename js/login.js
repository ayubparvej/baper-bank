document.getElementById('loginbtn').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    const passwordField = document.getElementById('user-pass');
    const password = passwordField.value;

    //Warning: Not the correct way to compare (always compare from server side instead of client side)
    if (email == 'mabap@gmail.com' && password == 'chele') {
        window.location.href = 'bank.html';
    } else {
        alert('wrong email or password')
    }


})
