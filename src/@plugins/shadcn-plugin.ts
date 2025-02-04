import plugin from 'tailwindcss/plugin';

const shadcnPlugin = plugin(
	// Add css variable definitions to the base layer
	function ({ addBase }) {
		addBase({
			':root': {
				// "--background": "147, 100%, 26%",
			},
		});
	},
	{
		theme: {
			extend: {
				keyframes: {
					'accordion-down': {
						from: { height: '0' },
						to: { height: 'var(--radix-accordion-content-height)' },
					},
					'accordion-up': {
						from: {
							height: 'var(--radix-accordion-content-height)',
						},
						to: { height: '0' },
					},
				},
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out',
				},
			},
		},
	}
);

export default shadcnPlugin;
