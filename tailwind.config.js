/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx}'],
	theme: {
		colors: {
			primary: '#F00850',
			secondary: '#08fdd8',
			black: '#191E23',
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				fontFamily: 'Montserrat',
			},
		},
	},
	plugins: [],
}
