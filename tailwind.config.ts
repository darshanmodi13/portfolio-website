import type { Config } from 'tailwindcss';

const config: Config = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				jet: 'var(--jet)',
				onyx: 'var(--onyx)',
				'eerie-black-1': 'var(--eerie-black-1)',
				'eerie-black-2': 'var(--eerie-black-2)',
				'smoky-black': 'var(--smoky-black)',
				'white-1': 'var(--white-1)',
				'white-2': 'var(--white-2)',
				'orange-yellow-crayola': 'var(--orange-yellow-crayola)',
				'vegas-gold': 'var(--vegas-gold)',
				'light-gray': 'var(--light-gray)',
				'light-gray-70': 'var(--light-gray-70)',
				'bittersweet-shimmer': 'var(--bittersweet-shimmer)',
			},
			backgroundImage: {
				'gradient-onyx': 'var(--bg-gradient-onyx)',
				'gradient-jet': 'var(--bg-gradient-jet)',
				'gradient-yellow-1': 'var(--bg-gradient-yellow-1)',
				'gradient-yellow-2': 'var(--bg-gradient-yellow-2)',
				'border-gradient-onyx': 'var(--border-gradient-onyx)',
				'text-gradient-yellow': 'var(--text-gradient-yellow)',
			},
			fontFamily: {
				poppins: 'var(--ff-poppins)',
			},
			fontSize: {
				'fs-1': 'var(--fs-1)',
				'fs-2': 'var(--fs-2)',
				'fs-3': 'var(--fs-3)',
				'fs-4': 'var(--fs-4)',
				'fs-5': 'var(--fs-5)',
				'fs-6': 'var(--fs-6)',
				'fs-7': 'var(--fs-7)',
				'fs-8': 'var(--fs-8)',
			},
			boxShadow: {
				'shadow-1': 'var(--shadow-1)',
				'shadow-2': 'var(--shadow-2)',
				'shadow-3': 'var(--shadow-3)',
				'shadow-4': 'var(--shadow-4)',
				'shadow-5': 'var(--shadow-5)',
			},
			transitionDuration: {
				'transition-1': 'var(--transition-1)',
				'transition-2': 'var(--transition-2)',
			},
		},
	},
	plugins: [],
};
export default config;
