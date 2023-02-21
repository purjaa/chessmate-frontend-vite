import React from 'react';
import clsx from 'clsx';
import { PublicPageStyle } from '../CommonStyle';
import { Notification, NotificationType } from '../../components';

function ErrorPage() {
  return (
    <main className={clsx(PublicPageStyle)}>
      <Notification
        type={NotificationType.Error}
        header="Page not found"
        text='Oops! The requested page can not be found.'
      />
    </main>
  );
}

export default ErrorPage;