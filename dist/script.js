"use strict";
let tasques = [];
function crearTarea(titulo, descripcion, categoria, estado = 1, fecha, prioridad = 1, etiquetas = []) {
    const tasquesRaw = JSON.parse(localStorage.getItem("tasques") | []);
    if (tasquesRaw.length > 1) {
        tasques = tasquesRaw;
    }
    if (tasquesRaw) {
        tasques = JSON.parse(tasquesRaw);
    }
    const novaTarea = {
        titulo,
        descripcion,
        categoria,
        estado,
        fecha,
        prioridad,
        etiquetas,
    };
    tasques.push(novaTarea);
    localStorage.setItem("tasques", JSON.stringify(tasques));
}
function eliminarTarea(titulo) {
    const tasquesRaw = localStorage.getItem("tasques");
    let tasques = [];
    if (tasquesRaw) {
        tasques = JSON.parse(tasquesRaw);
    }
    let index = -1;
    for (let i = 0; i < tasques.length; i++) {
        if (tasques[i].titulo === titulo) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        console.error("No se encontró ninguna tarea con el título:", titulo);
        return;
    }
    const tareaEliminada = tasques.splice(index, 1)[0];
    localStorage.setItem("tasques", JSON.stringify(tasques));
    console.log("Tarea eliminada:", tareaEliminada);
}
function actualizarTarea(titulo, nuevoTitulo, descripcion, estado, fecha, prioridad, etiquetas) {
    const tasquesRaw = localStorage.getItem("tasques");
    let tasques = [];
    if (tasquesRaw) {
        tasques = JSON.parse(tasquesRaw);
    }
    let index = -1;
    for (let i = 0; i < tasques.length; i++) {
        if (tasques[i].titulo === titulo) {
            index = i;
            break;
        }
    }
    if (index === -1) {
        console.error("No se encontró ninguna tarea con el título:", titulo);
        return;
    }
    if (nuevoTitulo !== undefined) {
        tasques[index].titulo = nuevoTitulo;
    }
    if (descripcion !== undefined) {
        tasques[index].descripcion = descripcion;
    }
    if (estado !== undefined) {
        tasques[index].estado = estado;
    }
    if (fecha !== undefined) {
        tasques[index].fecha = fecha;
    }
    if (prioridad !== undefined) {
        tasques[index].prioridad = prioridad;
    }
    if (etiquetas !== undefined) {
        tasques[index].etiquetas = etiquetas;
    }
    localStorage.setItem("tasques", JSON.stringify(tasques));
    console.log("Tarea actualizada:", tasques[index]);
}
<<<<<<< HEAD
=======
// Agergar Tarea
const btnCreateTask = document.querySelector(".btn-create-task");
btnCreateTask === null || btnCreateTask === void 0 ? void 0 : btnCreateTask.addEventListener("click", () => {
    console.log("Tarea Creada");
    const name = document.querySelector(".form-name").value;
    const description = document.querySelector(".form-description").value;
    const tags = document.querySelector(".form-tags").value;
    const date = document.querySelector(".form-date").value;
});
const divBtns = document.querySelector(".div-btns");
divBtns === null || divBtns === void 0 ? void 0 : divBtns.addEventListener("click", (e) => {
    if (e.target && e.target.tagName === "BUTTON") {
        const btn = e.target;
        const text = btn.textContent;
        alert(text.trim());
    }
});
/*
document.addEventListener("DOMContentLoaded", () => {
  const chkDashboard = document.getElementById("chkDashboard");
  const chkTodas = document.getElementById("chkTodas");
  const mainContent = document.getElementById("mainContent");

  // Guardamos el HTML original del dashboard
  const dashboardHTML = mainContent.innerHTML;

  chkDashboard.checked = true;

  chkDashboard.addEventListener("change", () => {
    if (chkDashboard.checked) {
      chkTodas.checked = false;
      mainContent.innerHTML = dashboardHTML;
    }
  });

  chkTodas.addEventListener("change", () => {
    if (chkTodas.checked) {
      chkDashboard.checked = false;

      fetch("./pages/todasLasTareas.html")
        .then((res) => res.text())
        .then((html) => {
          mainContent.innerHTML = html;
        })
        .catch((err) => {
          mainContent.innerHTML =
            "<p class='text-red-500'>Error cargando las tareas</p>";
          console.error(err);
        });
    }
  });
});
*/
>>>>>>> 4d4b20f (update)
function tancarSesio() {
    localStorage.removeItem("usuariActual");
    window.location.href = "./pages/login.html";
}
document.addEventListener("DOMContentLoaded", () => {
    const usuariActual = localStorage.getItem("usuariActual");
    if (!usuariActual) {
        window.location.href = "./pages/login.html";
    }
    const tasques = JSON.parse(localStorage.getItem("tasques") || "[]").map((t) => (Object.assign(Object.assign({}, t), { fecha: t.fecha ? new Date(t.fecha) : undefined })));
    console.log(tasques);
});
