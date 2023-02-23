import React from 'react';
import clsx from 'clsx';
import { PublicPageStyle } from '../CommonStyle';
import { Notification, NotificationType } from '../../components';

function ErrorPage() {
  return (
    <main className={clsx(
      PublicPageStyle,
      'tw-items-center'
    )}>
      <Notification
        type={NotificationType.Error}
        title="Page not found"
        description='Oops! The requested page can not be found.'
      />
    </main>
  );
}

export default ErrorPage;