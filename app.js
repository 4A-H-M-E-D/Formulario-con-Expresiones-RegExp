
const formulario = document.querySelector(".formulario");
const usuario = document.querySelector("#usuario")
const password = document.querySelector("#password")
const email = document.querySelector("#email");
const template = document.querySelector(".template")
const template2 = document.querySelector("#template")
const fragment = document.createDocumentFragment();
const alertUsuario = document.querySelector(".alert-usuario")
const alertPassword = document.querySelector(".alert-password")
const alertEmail = document.querySelector(".alert-email")
const msgContenido = document.querySelector(".resize-none")
const alertMensaje = document.querySelector(".mensaje")
const mensajeCompletado = document.querySelector(".mensaje-exito");


const errores = [];


formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const validarUsuario = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const validarEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const validarPassword = /^[A-Za-z0-9]{6,}$/;
    if(!validarUsuario.test(usuario.value) || !usuario.value.trim()) {
        usuario.classList.add("is-invalid")
        errores.push({
            tipo: alertUsuario,
            mensajeError: "El Usuario no es Válido".toUpperCase()
        })
    } else {
        usuario.classList.add("is-valid")
    }
    if(!validarEmail.test(email.value) || !email.value.trim()) {
        email.classList.add("is-invalid")
        errores.push({
            tipo: alertEmail,
            mensajeError: "El email no es Válido".toUpperCase()
        })
    } else {
        email.classList.add("is-valid");
    }
    if(!validarPassword.test(password.value) || !password.value.trim()) {
        password.classList.add("is-invalid");
        errores.push({
            tipo: alertPassword,
            mensajeError: "El password debe tener al menos 6 caractéres".toUpperCase()
        })
    } else {
        password.classList.add("is-valid")
    }
    // console.log(!msgContenido.value.trim().length);
    if(msgContenido.value.trim().length < 50) {
        msgContenido.classList.add("is-invalid")
        errores.push({
            tipo: alertMensaje,
            mensajeError: "El Mensaje debe contener al menos 50 caractares".toLocaleUpperCase()
        })
    }
    else {
        msgContenido.classList.add("is-valid");
    }
    if(errores.length > 0) {
        mensajeErrores(errores);
        return;
    }
    

    console.log("Formulario Enviado Con exito")
    mensajeExito();
});

const mensajeExito = () => {
    mensajeCompletado.classList.remove("d-none");
    mensajeCompletado.textContent = "Todos los formularios fueron validados".toUpperCase();
}

const parrafos = document.querySelectorAll(".alerta")

const mensajeErrores = (errores) => {
    errores.forEach(item => {
        item.tipo.textContent = item.mensajeError;
        parrafos.forEach(parrafo => {
            parrafo.classList.remove("d-none")
            parrafo.classList.add("d-block", "text-danger", "mb-0", "fw-bold");
            
        })
    })
}