/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./login.html",
		"./signup.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				// Colores extraídos del diseño de Figma
				primary: {
					DEFAULT: "#6d5dfb", // Color primario (morado)
					dark: "#362c77", // Color primario oscuro
				},
				neutral: {
					light: "#f7f7fb", // Fondo claro
					medium: "#d4d4e0", // Texto placeholder
					dark: "#1f1f29", // Bordes oscuros
				},
				warning: "#ffca65", // Color amarillo para "Pendiente"
				success: "#32d18a", // Color verde para "Completado"
			},
			spacing: {
				// Espaciados específicos del diseño
				spacerxs: "4px", // Espaciado extra pequeño
				spacers: "8px", // Espaciado pequeño
				spacerm: "16px", // Espaciado medio
				spacerx: "24px", // Espaciado grande
				spacerxl: "32px", // Espaciado extra grande
				spacerxxl: "40px", // Espaciado extra extra grande
			},
			borderRadius: {
				// Border radius personalizados
				spacerxs: "4px",
				spacers: "8px",
				spacerm: "16px",
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
			boxShadow: {
				card: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
			},
		},
	},
	plugins: [],
};
