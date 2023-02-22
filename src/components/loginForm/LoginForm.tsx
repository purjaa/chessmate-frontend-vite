import React, {
  useState,
  SyntheticEvent
} from 'react';
import clsx from 'clsx';
import {
  useForm,
  SubmitHandler,
  Controller
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../app/reducers/userSlice';
import { useAppDispatch } from '../../app/utils/appUtils';
import { InputFormStyle } from '../CommonStyle';
import {
  Button,
  TextInput,
  Notification,
  NotificationType,
  Loader
} from '../';
import { useTranslation } from 'react-i18next';

type FormValues = {
  username: string;
  password: string;
};

const defaultValues = {
  username: '',
  password: ''
};

function LoginForm() {
  const { t } = useTranslation(['login', 'errors']);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormValues>({ defaultValues });
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = formData => {
    setIsLoggingIn(true);
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
          setIsLoggingIn(false);
        }
      })
      .catch(error => {
        console.log(error);
        reset(formValues => ({
          ...formValues,
          password: '',
        }));
        setIsLoginError(true);
        setIsLoggingIn(false);
      });
  };

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
    <>
      { isLoggingIn && <Loader /> }
      <form
        className={clsx(InputFormStyle)}
        onSubmit={onPromise(handleSubmit(onSubmit))}
      >
        <h3 className="tw-text-center">
          {t('login:title')}
        </h3>
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label={t('login:username')}
              required={errors?.username !== undefined}
              {...field}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label={t('login:password')}
              type="password"
              required={errors?.password !== undefined}
              {...field}
            />
          )}
        />
        {
          isLoginError &&
          <Notification
            type={NotificationType.Error}
            description={t('errors:login.invalidCredentials')}
          />
        }
        <div className="tw-mt-2">
          <Button
            type="submit"
            fullWidth={true}
          >
            {t('login:login')}
          </Button>
        </div>
        <a href="/register">
          {t('login:notRegistered')}
        </a>
      </form>
    </>
  );
}

export default LoginForm;