/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
				'gradient-shift': 'gradientShift 8s ease-in-out infinite',
			},
			keyframes: {
				fadeInLeft: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				gradientShift: {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
						filter: 'hue-rotate(0deg)',
					},
					'50%': {
						backgroundPosition: '100% 50%',
						filter: 'hue-rotate(45deg)',
					},
				},
			},
			backgroundSize: {
				'200%': '200%',
			},
		},
	},
	plugins: [],
}
