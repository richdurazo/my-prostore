'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpDefaultValues } from '@/lib/constants';
import Link from 'next/link';
import { signUpUser } from '@/lib/actions/user.actions';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useSearchParams } from 'next/navigation';


const SignUpForm = () => {
    const [data, action] = useActionState(signUpUser, {
        success: false,
        message: ''
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/';

    const SignUpButton = () => {
        const { pending } = useFormStatus();

        return (
            <Button className='w-full' variant='default' disabled={pending} type='submit'>
                {pending ? 'Submitting...' : 'Sign Up'}
            </Button>
        );
    }

    return (
        <form action={action}>
            <input type="hidden" name="callbackUrl" value={callbackUrl} />
            <div className='space-y-6'>
                <div>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        id='name'
                        type='text'
                        name='name'
                        autoComplete='name'
                        required
                        defaultValue={signUpDefaultValues.name}
                    />
                </div>
                <div>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        id='email'
                        type='email'
                        name='email'
                        autoComplete='email'
                        required
                        defaultValue={signUpDefaultValues.email}
                    />
                </div>
                <div>
                    <Label htmlFor='password'>Password</Label>
                    <Input
                        id='password'
                        type='password'
                        name='password'
                        autoComplete='password'
                        required
                        defaultValue={signUpDefaultValues.password}
                    />
                </div>
                <div>
                    <Label htmlFor='confirmPassword'>Confirm Password</Label>
                    <Input
                        id='confirmPassword'
                        type='password'
                        name='confirmPassword'
                        autoComplete='confirmPassword'
                        required
                        defaultValue={signUpDefaultValues.confirmPassword}
                    />
                </div>
                <div>
                    <SignUpButton />
                </div>

                {data && !data.success && (
                    <div className="text-center text-destructive">{data.message}</div>
                )}

                <div className='text-sm text-center text-muted-foreground'>
                Already have an account?{' '}
                    <Link href='/sign-in' target='_self' className='link'>
                        Sign In
                    </Link>
                </div>
            </div>
        </form>
    );
};

export default SignUpForm;
