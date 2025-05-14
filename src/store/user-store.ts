import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import setAuthToken, { setAuthTokenHTTP } from '@/lib/set-auth-token';

type TState = {
	id: string;
	expiresIn: number;
	accessToken: string;
	refreshToken: string;
	firstname: string;
	lastname: string;
	email: string;
	phone: string;
	role: string;
	authorities: string[];
	isAuthenticated: boolean;
	isSuperAdmin: boolean;
	isStaff: boolean;
	isUserActive: boolean;
	address: string;
};

type TAction = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setUser: (payload: any) => void;
	reset: () => void;
};

// define the initial state
const initialState: TState = {
	id: '',
	expiresIn: 0,
	accessToken: '',
	refreshToken: '',
	firstname: '',
	lastname: '',
	email: '',
	phone: '',
	role: '',
	authorities: [],
	isAuthenticated: false,
	isSuperAdmin: false,
	isStaff: false,
	isUserActive: false,
	address: '',
};

const useAuthStore = create<TState & TAction>()(
	immer(
		devtools(
			persist(
				(set) => ({
					...initialState,
					setUser: (payload) =>
						set((state) => {
							state.expiresIn = payload.exp;
							state.accessToken = payload.access_token;
							state.refreshToken = payload.refresh_token;
							state.email = payload.email;
							state.firstname = payload.firstname;
							state.lastname = payload.lastname;
							state.role = payload.role;
							state.authorities = payload.permissions;
							state.isAuthenticated = true;
							state.isSuperAdmin = payload.isSuperAdmin;
							state.isStaff = payload.isStaff;
							state.id = payload.user_id;
							state.phone = payload.phone;
							state.address = payload.address;
							state.isUserActive = payload.isActive;
						}),
					reset: () => {
						set(initialState);
						setAuthToken(false);
						setAuthTokenHTTP(false);
					},
				}),
				{
					name: 'storage-name',
					onRehydrateStorage: () => (state) => {
						if (state?.accessToken) {
							setAuthTokenHTTP(state.accessToken); // Set token on rehydration
						}
					},
				}
			),
			{
				enabled: process.env.NODE_ENV === 'development',
				name: 'user-auth-store',
			}
		)
	)
);

export default useAuthStore;
