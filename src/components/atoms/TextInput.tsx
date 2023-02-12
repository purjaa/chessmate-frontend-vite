import React from 'react';
import clsx from 'clsx';
import { TextInputContainerTheme, TextInputTheme, TextInputLabelTheme } from '../theme';

export type TextInputProps = {
  label?: string;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLInputElement>;

function TextInput(props: TextInputProps) {
  const { children, label, ...rest } = props;

  return (
    <div className={clsx(TextInputContainerTheme)}>
      <label className={clsx(TextInputLabelTheme.common)}>
        {label}
      </label>
      <input
        className={clsx(TextInputTheme.common)}
        {...rest}
      />
    </div>
  );
}

export default TextInput;