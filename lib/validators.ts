import { z } from 'zod';
import { formatNumberWithDecimal } from './utils';

// Schema for inserting products
const currency = z
    .string()
    .refine(
        (value) =>
            /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
        'Price must be a valid number with 2 decimal places'
    );

export const insertProductSchema = z.object({
    name: z.string().min(3, 'Name must be at least 3 characters'),
    slug: z.string().min(3, 'Slug must be at least 3 characters'),
    category: z.string().min(3, 'Category must be at least 3 characters'),
    brand: z.string().min(3, 'Brand must be at least 3 characters'),
    description: z.string().min(3, 'Description must be at least 3 character'),
    stock: z.coerce.number(),
    images: z.array(z.string()).min(1, 'Product must have at least 1 image'),
    isFeatured: z.boolean(),
    banner: z.string().nullable(),
    price: currency,
});

// schema for signing users in
export const signInFormSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

// schema for signing up a user
export const signUpFormSchema = z.object({
    name: z.string().min(3, 'name must be at least 3 characters'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})