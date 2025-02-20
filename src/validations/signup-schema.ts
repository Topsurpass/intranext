import { z } from 'zod';
import { emailSchema } from './schema';

export const SignupSchema = z
	.object({
		first_name: z
			.string()
			.min(1, { message: 'First name cannot be empty' }),
		last_name: z
			.string()
			.min(1, { message: 'Last name cannot be empty' }),
		username: z
			.string()
			.min(4, { message: 'Username must be atleast 4 characters' }),
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' }),
	})
	.extend({
		email: emailSchema,
	});

export type SignupInputs = z.infer<typeof SignupSchema>;
