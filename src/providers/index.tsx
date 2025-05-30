'use client';

import React from 'react';
import { ThemeProvider } from './theme-provider';
import ReactQueryProvider from './react-query-provider';

import ToastProvider from './toast-provider';

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="system"
			enableSystem
			disableTransitionOnChange
		>
			<ReactQueryProvider>
				{children}
				<ToastProvider />
			</ReactQueryProvider>
		</ThemeProvider>
	);
}
