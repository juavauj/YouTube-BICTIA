function register() {

    // Variables para obtener valores del documento.
    const user = document.getElementById('user').value;

    const name = document.getElementById('name').value;

    let email = document.getElementById('email').value;

    email = email.toLowerCase(); // Convertimos el valor de email a minúsculas.

    const password = document.getElementById('password').value;

    // Objeto que contiene las variables anteriores.
    user1 = {

        user: user,

        name: name,

        email: email,

        password: password

    }

    // Condición para validar si se ha ingresado los datos necesarios.
    if (user && name && email && password) {

        localStorage.setItem( // Guardamos el Objeto como String

            "user", JSON.stringify(user1),
        );
        window.location.assign('login.html'); // Redirigimos a la página login.html

    } else {

        var alerta = "solid 2px red";


        if (user === '') {

            document.getElementById('user').style.border = alerta;

        }

        if (name === '') {

            document.getElementById('name').style.border = alerta;

        }

        if (email === '') {

            document.getElementById('email').style.border = alerta;

        }

        if (password === '') {

            document.getElementById('password').style.border = alerta;

        }


    }

}


function login() {
    let userLogin = document.getElementById('userLogin').value;
    let passwordLogin = document.getElementById('passwordLogin').value;

    let localuser = JSON.parse(localStorage.user);

    let alerta = "solid 2px red";

    if (userLogin === '') {

        document.getElementById('userLogin').style.border = alerta;

    }

    if (passwordLogin === '') {

        document.getElementById('passwordLogin').style.border = alerta;

    } else if (userLogin === localuser.user && passwordLogin === localuser.password) {
        window.location.assign("home.html")
    } else {
        if (userLogin !== localuser.user) {
            prompt('Usuario no encontrado')
        } else if (passwordLogin !== localuser.password) {
            prompt('Contra incorrecta')
        }
    }
}

function buttonLogin() {
    window.location.assign('login.html');
}

function buttonRegistro() {
    window.location.assign('registro.html');
}