import React from 'react';
import Button, { ButtonSize } from '../atoms/Button';
import TextInput from '../atoms/TextInput';

function LoginForm() {
  return (
    <div className='tw-flex tw-flex-col tw-bg-white tw-gap-y-4 tw-w-1/4 tw-p-4 tw-rounded-mw tw-shadow-lg'>
      <h3 className='tw-text-center'>Log Into Chessmate</h3>
      <TextInput label='Username' />
      <TextInput label='Password' />
      <div className='tw-mt-2'>
        <Button
          size={ButtonSize.Regular}
          fullWidth={true}
        >
          Log In
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;