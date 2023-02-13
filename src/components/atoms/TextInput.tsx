import React from 'react';
import clsx from 'clsx';
import { TextInputContainerStyle, TextInputStyle, TextInputLabelStyle } from './TextInputStyle';

export type TextInputProps = {
  label?: string;
  disabled?: boolean;
  required?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

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