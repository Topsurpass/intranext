'use client';
import RouteGuard from '@/routes/route-guard';

export function Layout({ children }: { children: React.ReactNode }) {
	return <div className="flex h-screen w-full flex-col">{children}</div>;
}

export default RouteGuard(Layout);
