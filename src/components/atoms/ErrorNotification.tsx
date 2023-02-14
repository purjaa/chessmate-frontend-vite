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
        <h4 className='tw-text-sm tw-text-red-700 tw-font-bold'>
          {header}
        </h4>
      }
      <p className='tw-text-sm tw-text-red-700'>
        {text}
      </p>
    </div>
  );
}

export default ErrorNotification;