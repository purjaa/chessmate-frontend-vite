import React, { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

type FormValues = {
  username: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<FormValues>();
  
  const [isLoginError, setIsLoginError] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = formData => {
    // TODO: Submit the values to the server and act
    // according to the response.
  };

  useEffect(() => {
    register('username', { required: true });
    register('password', { required: true });
  }, []);

  return (
    <form
      className='tw-flex tw-flex-col tw-bg-white tw-gap-y-4 tw-w-1/4 tw-p-4 tw-rounded-mw tw-shadow-lg'
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className='tw-text-center'>Log Into Chessmate</h3>
      <TextInput
        label='Username'
        name='username'
        onChange={e => setValue('username', e.target.value)}
      />
      <TextInput
        label='Password'
        name='password'
        onChange={e => setValue('password', e.target.value)}
      />
      <div className='tw-mt-2'>
        <Button
          type="submit"
          fullWidth={true}
        >
          Log In
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;