import React from 'react';
import clsx from 'clsx';
import { TextInputContainerStyle, TextInputStyle, TextInputLabelStyle } from './TextInputStyle';

interface TextInputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string,
  disabled?: boolean,
  required?: boolean,
};

function TextInput(props: TextInputProps) {
  const { children, label, ...rest } = props;

  return (
    <div className={clsx(TextInputContainerStyle)}>
      <label className={clsx(TextInputLabelStyle)}>
        {label}
      </label>
      <input
        className={clsx(TextInputStyle)}
        {...rest}
      />
    </div>
  );
}

export default TextInput;