'use client'

import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useRef } from 'react';
import { useUser } from '@context/user';
import { useRouter } from 'next/navigation';
import { UserService } from '@services/user';
import { IUser } from '@models/User';
import { Button, Input, Label, Typography } from '@ui-core/components';

const SignUpPage = () => {
  const router = useRouter();
  const UserCTX = useUser();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onBlur' });

  const password = useRef({});
  password.current = watch('password', '');

  const {
    mutate: createUser,
    error,
    isLoading,
  } = useMutation({
    mutationFn: (user: IUser) => UserService.createUser(user),
    onSuccess: (newUser) => {
      UserCTX.signIn(newUser);
      router.push('/');
    },
  });

  const onsubmit = async (data: FieldValues) => {
    createUser({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });
  };

  return (
    <div className='mx-auto max-w-sm'>
      <form onSubmit={handleSubmit(onsubmit)} autoComplete='off'>
        <Typography variant='h1' className='text-center'>
          Create Account
        </Typography>
        <div className='mb-4'>
          <Label htmlFor='firstName'>First Name</Label>
          <Controller
            name='firstName'
            control={control}
            rules={{
              required: 'Please enter first name',
              maxLength: {
                value: 100,
                message: 'First Name is too lengthy',
              },
              pattern: {
                value: /^[a-zA-z ,.'-]+$/,
                message: 'Please enter valid first name',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                error={!!errors.firstName}
                helperText={
                  errors.firstName && String(errors.firstName.message)
                }
              />
            )}
          />
        </div>
        <div className='mb-4'>
          <Label htmlFor='lastName'>Last Name</Label>
          <Controller
            name='lastName'
            control={control}
            rules={{
              required: 'Please enter last name',
              pattern: {
                value: /^[a-zA-Z ,.'-]+$/,
                message: 'Please enter valid last name',
              },
            }}
            defaultValue=''
            render={({ field }) => (
              <Input
                {...field}
                error={!!errors.lastName}
                helperText={errors.lastName && String(errors.lastName.message)}
              />
            )}
          />
        </div>
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
          <Label htmlFor='email'>Password</Label>
          <Controller
            name='password'
            control={control}
            defaultValue=''
            rules={{
              required: 'Please enter password',
              maxLength: {
                value: 32,
                message: 'password is too lengthy',
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  'Password should contain Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
              },
            }}
            render={({ field }) => (
              <Input
                {...field}
                name='password'
                type='password'
                error={!!errors.password}
                helperText={errors.password && String(errors.password.message)}
              />
            )}
          />
        </div>
        <div className='mb-4'>
          <Label htmlFor='email'>Confirm Password</Label>
          <Controller
            name='cpassword'
            control={control}
            rules={{
              required: 'Please re-enter passoword',
              validate: (value) =>
                value === password.current || 'The passwords do not match',
            }}
            defaultValue=''
            render={({ field }) => (
              <Input
                {...field}
                type='password'
                error={!!errors.cpassword}
                helperText={
                  errors.cpassword && String(errors.cpassword.message)
                }
              />
            )}
          />
        </div>
        <div className='mt-8 text-center'>
          <Button type='submit' variant='default' disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Sign In'}
          </Button>
        </div>
        ˝
      </form>
    </div>
  );
};

export default SignUpPage;
