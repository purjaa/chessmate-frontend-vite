import React, {
  useState,
  useEffect,
  useRef,
  SyntheticEvent
} from 'react';
import clsx from 'clsx';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../app/reducers/userSlice';
import { useAppDispatch } from '../../app/utils/appUtils';
import { InputFormStyle } from '../CommonStyle';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';
import Notification, { NotificationType } from '../atoms/Notification';
import Loader from '../atoms/Loader';

type FormValues = {
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
};

function RegistrationForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors }
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      username: 'string',
      password: 'string',
      repeatPassword: 'string',
    }
  });
  const password = useRef({});
  password.current = watch('password', '');

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
          reset({
            email: '',
            username: '',
            password: '',
            repeatPassword: ''
          });
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

  useEffect(() => {
    register('email', { required: true });
    register('username', { required: true });
    register('password', { required: true });
    register('repeatPassword', {
      required: true,
      validate: value =>
        value === password.current
    });
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
    <>
      { isRegistering && <Loader /> }
      <form
        className={clsx(InputFormStyle)}
        onSubmit={onPromise(handleSubmit(onSubmit))}
      >
        <h3 className="tw-text-center">Register</h3>
        <TextInput
          label="Email"
          name="email"
          onChange={e => setValue('email', e.target.value)}
          disabled={isRegistrationSuccess}
        />
        <TextInput
          label="Username"
          name="username"
          onChange={e => setValue('username', e.target.value)}
          disabled={isRegistrationSuccess}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          onChange={e => setValue('password', e.target.value)}
          disabled={isRegistrationSuccess}
        />
        <TextInput
          label="Repeat Password"
          name="repeat-password"
          type="password"
          onChange={e => setValue('repeatPassword', e.target.value)}
          disabled={isRegistrationSuccess}
        />
        {
          (
            errors?.email ||
            errors?.username ||
            errors?.password
          ) &&
          <Notification
            type={NotificationType.Error}
            header="Error in registration"
            text="Please fill all fields"
          />
        }
        {
          errors.repeatPassword &&
          <Notification
            type={NotificationType.Error}
            header="Error in registration"
            text="The passwords do not match"
          />
        }
        {
          isRegistrationError &&
          <Notification
            type={NotificationType.Error}
            header="Error in registration"
            text="The email address or username already exist in the system. Please choose another."
          />
        }
        {
          isRegistrationSuccess &&
          <Notification
            type={NotificationType.Success}
            header="Registration success"
            text='You have registered succesfully. Redirecting to Log In page...'
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