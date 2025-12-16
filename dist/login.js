"use strict";
window.onload = () => {
    const usuariActual = localStorage.getItem("usuariActual");
    if (usuariActual) {
        window.location.href = "index.html";
    }
};
function validarUsuario() {
    const user = document.getElementById("username").value;
    const password = document.getElementById("password")
        .value;
    const error = document.getElementById("error");
    const usuarisGuardats = JSON.parse(localStorage.getItem("usuarisRegistrats") || "[]");
    if (usuarisGuardats.length === 0) {
        if (error)
            error.innerHTML = "No hi ha cap compte registrat.";
        return;
    }
    const usuariTrobat = usuarisGuardats.find((u) => (u.username === user || u.email === user) && u.password === password);
    if (usuariTrobat) {
        localStorage.setItem("usuariActual", JSON.stringify(usuariTrobat));
        window.location.href = "index.html";
    }
    else {
        if (error)
            error.innerHTML = "Usuari o contrasenya incorrectes.";
    }
}
const btnValidate = document.querySelector(".btn-validate");
btnValidate === null || btnValidate === void 0 ? void 0 : btnValidate.addEventListener("click", validarUsuario);
