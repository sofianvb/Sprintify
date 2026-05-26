document.addEventListener("DOMContentLoaded", function () {
    const formRegistro = document.getElementById("formRegistro");

    if (formRegistro) {
        formRegistro.addEventListener("submit", function (event) {
            event.preventDefault();
            event.stopPropagation();

            if (!formRegistro.checkValidity()) {
                formRegistro.classList.add("was-validated");
            } else {
                formRegistro.classList.remove("was-validated");
                alert("Registro completado con éxito. ¡Bienvenido a Sprintify!");
                formRegistro.reset();
            }
        }, false);
    }
});