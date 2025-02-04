export type ThemeProviderProps = {
	children: React.ReactNode;
	defaultTheme?: 'light' | 'dark' | 'system';
	storageKey?: string;
};

export type ThemeProviderState = {
	theme: 'light' | 'dark' | 'system';
	setTheme: (theme: 'light' | 'dark' | 'system') => void;
};
