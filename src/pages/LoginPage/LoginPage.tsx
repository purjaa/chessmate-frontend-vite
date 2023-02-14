import React from 'react';
import clsx from 'clsx';
import { LoginForm } from '../../components';
import { PublicPageStyle } from '../CommonStyle';

function LoginPage() {
  return (
    <main className={clsx(PublicPageStyle)}>
      <LoginForm />
    </main>
  );
}

export default LoginPage;