interface Tarea {
	titulo: string;
	descripcion?: string;
	estado: number;
	fecha?: Date;
	prioridad: number;
	etiquetas: string[];
}

function abrirModal() {
	console.log("Abriendo Nueva Tarea");
}

function crearTarea(
	titulo: string,
	descripcion?: string,
	estado: number = 1,
	fecha?: Date,
	prioridad: number = 1,
	etiquetas: string[] = [],
) {
	const tasquesRaw = localStorage.getItem("tasques");
	let tasques: Tarea[] = [];
	if (tasquesRaw) {
		tasques = JSON.parse(tasquesRaw) as Tarea[];
	}

	const novaTarea: Tarea = {
		titulo,
		descripcion,
		estado,
		fecha,
		prioridad,
		etiquetas,
	};

	tasques.push(novaTarea);

	localStorage.setItem("tasques", JSON.stringify(tasques));

	console.log("Tarea creada:", novaTarea);
}

function eliminarTarea(titulo: string) {
	const tasquesRaw = localStorage.getItem("tasques");
	let tasques: Tarea[] = [];
	if (tasquesRaw) {
		tasques = JSON.parse(tasquesRaw) as Tarea[];
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

function actualizarTarea(
	titulo: string,
	nuevoTitulo?: string,
	descripcion?: string,
	estado?: number,
	fecha?: Date,
	prioridad?: number,
	etiquetas?: string[],
) {
	const tasquesRaw = localStorage.getItem("tasques");
	let tasques: Tarea[] = [];
	if (tasquesRaw) {
		tasques = JSON.parse(tasquesRaw) as Tarea[];
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


function tancarSesio() {
	localStorage.removeItem("usuariActual");
	window.location.href = "./pages/login.html";
}

document.addEventListener("DOMContentLoaded", () => {
	const usuariActual = localStorage.getItem("usuariActual");

	if (!usuariActual) {
		window.location.href = "./pages/login.html";
	}

	const tasques = (
		JSON.parse(localStorage.getItem("tasques") || "[]") as Tarea[]
	).map((t) => ({ ...t, fecha: t.fecha ? new Date(t.fecha) : undefined }));

	console.log(tasques);
});
