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
import { registerUser } from '../../app/reducers/userSlice';
import { useAppDispatch } from '../../app/utils/appUtils';
import { InputFormStyle } from '../CommonStyle';
import {
  Button,
  TextInput,
  Notification,
  NotificationType,
  Loader
} from '../';

type FormValues = {
  email: string;
  username: string;
  password: string;
};

const defaultValues = {
  email: '',
  username: '',
  password: ''
};

function RegistrationForm() {
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors }
  } = useForm<FormValues>({ defaultValues });
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const [isRegistrationError, setIsRegistrationError] = useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = formData => {
    setIsRegistering(true);
    dispatch(registerUser(formData.email, formData.username, formData.password))
      .then(isRegistrationSuccess => {
        setIsRegistering(false);
        if (isRegistrationSuccess) {
          setIsRegistrationSuccess(isRegistrationSuccess);
          reset();
          setTimeout(() => {
            navigate('/login');
          }, 5000);
        }
        else {
          setIsRegistrationError(true);
        }
      })
      .catch(error => {
        console.log(error);
        setIsRegistrationError(true);
        setIsRegistering(false);
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
      { isRegistering && <Loader /> }
      <form
        className={clsx(InputFormStyle)}
        onSubmit={onPromise(handleSubmit(onSubmit))}
      >
        <h3 className="tw-text-center">Register</h3>
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Email"
              disabled={isRegistrationSuccess}
              required={errors.email !== undefined}
              {...field}
            />
          )}
        />
        <Controller
          name="username"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextInput
              label="Username"
              disabled={isRegistrationSuccess}
              required={errors.username !== undefined}
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
              label="Password"
              type="password"
              disabled={isRegistrationSuccess}
              required={errors.password !== undefined}
              {...field}
            />
          )}
        />
        {
          isRegistrationError &&
          <Notification
            type={NotificationType.Error}
            description="The email address or username already exist in the system. Please choose another."
          />
        }
        {
          isRegistrationSuccess &&
          <Notification
            type={NotificationType.Success}
            description='You have registered succesfully. Redirecting to Log In page...'
          />
        }
        <div className="tw-mt-2">
          <Button
            type="submit"
            fullWidth={true}
            disabled={isRegistrationSuccess}
          >
            Register
          </Button>
        </div>
        <a href="/login">Already registered? Click here.</a>
      </form>
    </>
  );
}

export default RegistrationForm;