import React from 'react';
import clsx from 'clsx';
import { PublicPageStyle } from '../CommonStyle';
import RegistrationForm from '../../components/registrationForm/RegistrationForm';

function RegistrationPage() {
  return (
    <main className={clsx(PublicPageStyle)}>
      <RegistrationForm />
    </main>
  );
}

export default RegistrationPage;