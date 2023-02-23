import React from 'react';
import clsx from 'clsx';
import { NotificationStyle } from './NotificationStyle';

export enum NotificationType {
  Success = 'success',
  Error = 'error'
}

interface NotificationProps {
  type: NotificationType
  title?: string | null,
  description: string
}

function Notification(props: NotificationProps) {
  const { type, title, description } = props;

  return (
    <div className={clsx(NotificationStyle[type].container)}>
      {
        title &&
        <h5 className={clsx(NotificationStyle[type].title)}>
          {title}
        </h5>
      }
      <p className={clsx(NotificationStyle[type].description)}>
        {description}
      </p>
    </div>
  );
}

export default Notification;