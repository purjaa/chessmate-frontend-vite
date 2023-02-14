import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../app/reducers/userSlice';
import { useAppDispatch } from '../../app/utils/appUtils';
import Button from '../atoms/Button';
import ErrorNotification from '../atoms/ErrorNotification';
import TextInput from '../atoms/TextInput';

type FormValues = {
  username: string;
  password: string;
};

function LoginForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const [isLoginError, setIsLoginError] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = formData => {
    dispatch(loginUser(formData.username, formData.password))
      .then(isLoginSuccess => {
        if (isLoginSuccess) {
          navigate('/');
        }
        else {
          reset(formValues => ({
            ...formValues,
            password: '',
          }));
          setIsLoginError(true);
        }
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    register('username', { required: true });
    register('password', { required: true });
  }, []);

  // A workaround for error:
  // "Promise-returning function provided to attribute where a
  // void return was expected."
  // when doing this:
  // <form onSubmit={handleSubmit(onSubmit)}
  function onPromise<T>(promise: (event: SyntheticEvent) => Promise<T>) {
    return (event: SyntheticEvent) => {
      if (promise) {
        promise(event).catch((error) => {
          console.log('onPromise:Error', error);
        });
      }
    };
  }

  return (
    <form
      className="tw-flex tw-flex-col tw-bg-white tw-gap-y-4 tw-w-1/4 tw-p-4 tw-rounded-mw tw-shadow-lg"
      onSubmit={onPromise(handleSubmit(onSubmit))}
    >
      <h3 className="tw-text-center">Log Into Chessmate</h3>
      <TextInput
        label="Username"
        name="username"
        onChange={e => setValue('username', e.target.value)}
      />
      <TextInput
        label="Password"
        name="password"
        onChange={e => setValue('password', e.target.value)}
      />
      {
        (errors?.username || errors?.password || isLoginError) &&
        <ErrorNotification
          header="Error logging in"
          text="Invalid username or password"
        />
      }
      <div className="tw-mt-2">
        <Button
          type="submit"
          fullWidth={true}
        >
          Log In
        </Button>
      </div>
      <a href='/register'>Not registered? Click here.</a>
    </form>
  );
}

export default LoginForm;