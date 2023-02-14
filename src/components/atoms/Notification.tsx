import React from 'react';
import clsx from 'clsx';
import { NotificationStyle } from './NotificationStyle';

export enum NotificationType {
  Success = 'success',
  Error = 'error'
}

interface NotificationProps {
  type: NotificationType
  header?: string,
  text: string
}

function Notification(props: NotificationProps) {
  const { type, header, text } = props;

  return (
    <div className={clsx(NotificationStyle[type].container)}>
      {
        header &&
        <h5 className={clsx(NotificationStyle[type].header)}>
          {header}
        </h5>
      }
      <p className={clsx(NotificationStyle[type].text)}>
        {text}
      </p>
    </div>
  );
}

export default Notification;