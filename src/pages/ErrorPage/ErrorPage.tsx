import React from 'react';
import clsx from 'clsx';
import { PublicPageStyle } from '../CommonStyle';
import { Notification, NotificationType } from '../../components';
import { useTranslation } from 'react-i18next';

function ErrorPage() {
  const { t } = useTranslation(['errors']);

  return (
    <main className={clsx(
      PublicPageStyle,
      'tw-items-center'
    )}>
      <Notification
        type={NotificationType.Error}
        title={t('errors:pageNotFound.title')}
        description={t('errors:pageNotFound.description')}
      />
    </main>
  );
}

export default ErrorPage;