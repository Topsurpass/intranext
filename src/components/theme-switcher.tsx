import { useTheme } from 'next-themes';
import { LuSunMoon } from 'react-icons/lu';

export default function ThemeSwitcher() {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};

	return (
		<div className="space-y-5">
			<button
				className="rounded-lg py-2 px-2 dark:border-white border border-black"
				onClick={toggleTheme}
			>
				<LuSunMoon size={24} />
			</button>
		</div>
	);
}
