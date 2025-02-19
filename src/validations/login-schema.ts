import { z } from 'zod';
import { emailSchema } from './schema';

export const LoginSchema = z
	.object({
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' }),
		persistUser: z.boolean().optional(),
	})
	.extend({
		email: emailSchema,
	});

export type LoginInputs = z.infer<typeof LoginSchema>;
