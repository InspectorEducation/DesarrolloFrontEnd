class Login {
    constructor(form, fields) {
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }

    validateonSubmit() {
        let self = this; // setup calls to the "this" values of the class described in the constructor

        // add a "submit" event listener to the form
        this.form.addEventListener("submit", (e) => {
            // remove default functionality 
            e.preventDefault();            
            var token;
            // consumir el servicio   
            const user = document.querySelector(`#username`);
            const pass = document.querySelector(`#password`);

            var url = "http://localhost:8080/api/auth/login";
            var data = {
                nombre: user.value,
                contrasena: pass.value
            };

            fetch(url, {
                method: "POST", // or 'PUT'
                body: JSON.stringify(data), // data can be `string` or {object}!
                headers: {
                    "Content-Type": "application/json"
                },
            })
                .then((res) => res.json())
                .catch((error) =>
                    alert("Error Password or Username")
                )
                .then((response) => {
                    token = response[0];
                    localStorage.setItem("auth", token);
                    this.form.submit();
                });           
        });
    }    

}

document.addEventListener("DOMContentLoaded", function () {
    const showRegisterButton = document.getElementById("show-register-form");
    const registerForm = document.getElementById("register-form");
    const loginForm = document.getElementById("login-form");

    showRegisterButton.addEventListener("click", function () {
        registerForm.style.display = "block"; // Muestra el formulario de registro
        loginForm.style.display = "none"; // Esconde el formulario de login
    });
});


// create a variable for the login form
const form = document.querySelector(".login");
// if the form exists, run the class
if (form) {
    // setup the fields we want to validate, we only have two but you can add others
    const fields = ["username", "password"];
    // run the class
    const validator = new Login(form, fields);
}

