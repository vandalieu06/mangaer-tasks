window.onload = () => {
	const usuariActual = localStorage.getItem("usuariActual");
	if (usuariActual) {
		window.location.href = "index.html";
	}
};

function validarUsuario() {
	console.log("Click en login");
	const user = (document.getElementById("username") as HTMLInputElement).value;
	const password = (document.getElementById("password") as HTMLInputElement)
		.value;

	const error = document.getElementById("error");

	const usuarisGuardats = JSON.parse(
		localStorage.getItem("usuarisRegistrats") || "[]",
	) as Usuari[];

	if (usuarisGuardats.length === 0) {
		if (error) error.innerHTML = "No hi ha cap compte registrat.";
		return;
	}

	const usuariTrobat = usuarisGuardats.find(
		(u) => (u.username === user || u.email === user) && u.password === password,
	);

	if (usuariTrobat) {
		localStorage.setItem("usuariActual", JSON.stringify(usuariTrobat));

		window.location.href = "/";
	} else {
		if (error) error.innerHTML = "Usuari o contrasenya incorrectes.";
	}
}
const btnValidate = document.querySelector(".btn-validate");
btnValidate?.addEventListener("click", validarUsuario);
