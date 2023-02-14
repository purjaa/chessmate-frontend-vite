import React from 'react';
import clsx from 'clsx';
import { InputFormStyle } from '../CommonStyle';
import Button from '../atoms/Button';
import TextInput from '../atoms/TextInput';

function RegistrationForm() {
  return (
    <form
      className={clsx(InputFormStyle)}
    >
      <h3 className="tw-text-center">Register</h3>
      <TextInput
        label="Email"
      />
      <TextInput
        label="Username"
      />
      <TextInput
        label="Password"
      />
      <TextInput
        label="Retype Password"
      />
      <div className="tw-mt-2">
        <Button
          type="submit"
          fullWidth={true}
        >
          Register
        </Button>
      </div>
      <a href="/login">Already registered? Click here.</a>
    </form>
  );
}

export default RegistrationForm;