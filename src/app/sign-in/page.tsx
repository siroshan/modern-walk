'use client';

import { useUser } from '@context/user';
import { IUser } from '@models/User';
import { CustomError } from '@services/api';
import { UserService } from '@services/user';
import {
  Button,
  Checkbox,
  Input,
  Label,
  PasswordInput,
  ToastAction,
  Typography,
  useToast,
} from '@ui-core/components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

const SignInPage = () => {
  const { toast } = useToast();
  const [showPwd, setShowPwd] = useState(false);
  const router = useRouter();
  const UserCTX = useUser();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const {
    mutate: signIn,
    isSuccess,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (user: Pick<IUser, 'email' | 'password'>) =>
      UserService.getUser(user.email),
    onSuccess: (data, variable, context) => {
      if (data === undefined) {
        throw new CustomError('Invalid Credentials');
      }
      if (data.password === variable.password) {
        UserCTX.signIn(data);
        router.push('/');
      }
    },
  });

  const onsubmit = async (data: FieldValues) => {
    signIn({ email: data.email, password: data.password });
  };

  useEffect(() => {
    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: new CustomError(error).message,
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    }
  }, [error, isLoading]);

  return (
    <div className='mx-auto max-w-sm'>
      <form onSubmit={handleSubmit(onsubmit)} className='mt-10'>
        <Typography variant='h1' className='text-center'>
          Modern Walk
        </Typography>
        <div className='mb-4'>
          <Label htmlFor='email'>Email Address</Label>
          <Controller
            name='email'
            control={control}
            rules={{
              required: 'Please enter E-mail.',
            }}
            render={({ field }) => (
              <Input
                {...field}
                type='email'
                id='email'
                placeholder='elon@tesla.com'
                error={!!errors.email}
                helperText={errors.email && String(errors.email.message)}
              />
            )}
          />
        </div>
        <div className='mb-4'>
          <Label htmlFor='password'>Password</Label>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: 'Please password.',
            }}
            render={({ field }) => (
              <PasswordInput
                {...field}
                isShow={showPwd}
                setIsShow={setShowPwd}
                error={Boolean(errors.password)}
                helperText={errors.password && String(errors.password.message)}
              />
            )}
          />
          <Link href='/forgot-password' className='link text-primary'>
            Forgot password?
          </Link>
        </div>
        <div className='mt-8 flex flex-row justify-between text-center'>
          <div className='flex flex-row items-center'>
            <Checkbox name='rememberMe' />
            <Label htmlFor='rememberMe'>Remember me</Label>
          </div>
          <Button type='submit' variant='default' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;
