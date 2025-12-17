interface Tarea {
	titulo: string;
	descripcion?: string;
	categoria: string;
	estado: number;
	fecha?: Date;
	prioridad: number;
	etiquetas: string[];
}
let tasques: Tarea[] = [];

function crearTarea(
	titulo: string,
	descripcion?: string,
	categoria: string,
	estado: number = 1,
	fecha?: Date,
	prioridad: number = 1,
	etiquetas: string[] = [],
) {
	const tasquesRaw = JSON.parse(localStorage.getItem("tasques") | []);
	if (tasquesRaw.length > 1) {
		tasques = tasquesRaw;
	}

	if (tasquesRaw) {
		tasques = JSON.parse(tasquesRaw) as Tarea[];
	}

	const novaTarea: Tarea = {
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

// Agergar Tarea
const btnCreateTask = document.querySelector(".btn-create-task");
btnCreateTask?.addEventListener("click", () => {
	console.log("Tarea Creada");
	const name = (document.querySelector(".form-name") as HTMLInputElement).value;
	const description = (
		document.querySelector(".form-description") as HTMLInputElement
	).value;
	const tags = (document.querySelector(".form-tags") as HTMLInputElement).value;
	const date = (document.querySelector(".form-date") as HTMLInputElement).value;
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
