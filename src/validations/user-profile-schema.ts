import { z } from 'zod';
import { emailSchema } from './schema';

export const UserProfileSchema = z
	.object({
		first_name: z
			.string()
			.min(1, { message: 'First name cannot be empty' }),
		last_name: z.string().min(1, { message: 'Last name cannot be empty' }),
		profile_picture: z
			.union([
				z.instanceof(File),
				z.string().min(1, 'Please provide a valid image path'),
			])
			.nullable(),
		profile: z
			.object({
				phone: z.string().optional(),
				address: z.string().optional(),
			})
			.optional(),
	})
	.extend({
		email: emailSchema,
	});

export type UserProfileInputs = z.infer<typeof UserProfileSchema>;
