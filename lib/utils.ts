import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// convert prisma object into a regular js object
export function convertToPlainObject<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
}

// format number with decimal places
// example: 1234.5678 -> 1,234.57
export function formatNumberWithDecimal(num: number): string {
    const [int, decimal] = num.toString().split('.');
    return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00 `;
}

// Format errors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function formatError(error: any) {

    if (error.name === 'ZodError') {
        // handle zod error
        const issues = error.issues ?? error.errors ?? [];
        const fieldErrors = Object.keys(issues).map((field) =>{
            return issues[field]?.message ?? '';
        });
        return fieldErrors.join('. ');

    } else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002') {
        // handle prisma error
        const field = error.meta?.target ? error.meta.target[0] : 'Field';
        return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`
    } else {
        // handle other errors
        return typeof error.message === 'string' ? error.message : JSON.stringify(error.message);
    }
}