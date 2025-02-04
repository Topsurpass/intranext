/**
 * npm install -D tailwindcss-debug-screens @tailwindcss/forms
 * @tailwindcss/aspect-ratio @tailwindcss/container-queries tailwind-scrollbar
 * tailwindcss-animate
 */

import type { Config } from 'tailwindcss';
import tailwindDebugScreen from 'tailwindcss-debug-screens';
import tailwindForm from '@tailwindcss/forms';
import tailwindAspectRatio from '@tailwindcss/aspect-ratio';
import tailwindContainerQueries from '@tailwindcss/container-queries';
import tailwindScrollbar from 'tailwind-scrollbar';
import tailwindAnimate from 'tailwindcss-animate';
import shadcnPlugin from './shadcn-plugin';
import shwPlugin from './shw-plugin';

/**
 * https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss
 * https://github.com/tailwindlabs/tailwindcss-container-queries
 */

const shwPreset = {
	content: [],
	plugins: [
		shadcnPlugin,
		shwPlugin,
		tailwindDebugScreen,
		tailwindForm,
		tailwindAspectRatio,
		tailwindContainerQueries,
		tailwindAnimate,
		tailwindScrollbar({ nocompatible: true }),
	],
} satisfies Config;

export default shwPreset;
