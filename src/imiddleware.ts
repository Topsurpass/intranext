import { NextRequest, NextResponse } from 'next/server';
import {jwtDecode} from 'jwt-decode';

export function middleware(req: NextRequest) {
	const token = req.cookies.get('accessToken')?.value;
	const { pathname } = req.nextUrl;

	const publicRoutes = ['/login', '/signup', '/forgot-password', '/reset-password'];

	const isPublicRoute = publicRoutes.includes(pathname);

	if (!token && !isPublicRoute) {
		return NextResponse.redirect(new URL('/login', req.url));
	}

	if (token) {
		try {
			const decoded: { exp: number } = jwtDecode(token);
			const isTokenExpired = decoded.exp * 1000 < Date.now();

			if (isTokenExpired) {
				const response = NextResponse.redirect(new URL('/login', req.url));
				response.cookies.set('accessToken', '', { expires: new Date(0) });
				return response;
			}
		} catch {
			const response = NextResponse.redirect(new URL('/login', req.url));
			response.cookies.set('accessToken', '', { expires: new Date(0) });
			return response;
		}
	}

	if (isPublicRoute && token) {
		return NextResponse.redirect(new URL('/', req.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
