import React from 'react';

interface ErrorNotificationProps {
  header?: string,
  text: string
}

function ErrorNotification(props: ErrorNotificationProps) {
  const { header, text } = props;

  return (
    <div className="tw-bg-red-300 tw-border-2 tw-border-red-500 tw-p-4">
      {
        header &&
        <h5 className='tw-text-red-700 tw-font-bold'>
          {header}
        </h5>
      }
      <p className='tw-text-sm tw-text-red-700'>
        {text}
      </p>
    </div>
  );
}

export default ErrorNotification;