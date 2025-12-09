"use strict";
window.onload = function () {
    const usuariActual = localStorage.getItem("usuariActual");
    if (!usuariActual) {
        window.location.href = "login.html";
    }
};
function tancarSesio() {
    localStorage.removeItem("usuariActual");
    window.location.href = "login.html";
}
