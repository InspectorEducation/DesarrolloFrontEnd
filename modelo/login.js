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
            var error = 0;
            var token;
            // consumir el servicio   
            const input = document.querySelector(`#username`);
            console.log(input.value);
            token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
            this.generateToken();

            // if everything validates, error will be 0 and can continue
            if (error == 0) {
                //do login api here or in this case, just submit the form and set a localStorage item
                localStorage.setItem("auth", token);
                //this.form.submit();
            }
        });
    }

    generateToken(){
        var url = "http://localhost:8080/api/auth/login";
        var data = {
            nombre:"user01",
            contrasena:"123456"
        };

        fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://127.0.0.1:5501"
            },
        })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error))
        .then((response) => console.log("Success:", response));
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

