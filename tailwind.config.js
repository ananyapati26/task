/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
		fontFamily: {
			'robo': ['Roboto'],
			'dm': ['DM Sans']
		},
	},
	plugins: [
		require("tailwind-scrollbar-hide"),
	],
}

