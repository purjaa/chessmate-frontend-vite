import React from 'react';
import Button, { ButtonSize } from '../atoms/Button';
import TextInput from '../atoms/TextInput';

function LoginForm() {
  return (
    <div className='tw-flex tw-flex-col tw-gap-y-4 tw-w-1/5 tw-rounded-mw'>
      <TextInput label='Username' />
      <TextInput label='Password' />
      <div className='tw-mt-2'>
        <Button size={ButtonSize.Large} fullWidth={true}>Log in</Button>
      </div>
    </div>
  );
}

export default LoginForm;