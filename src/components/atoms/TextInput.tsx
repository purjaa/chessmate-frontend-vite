import React from 'react';
import clsx from 'clsx';
import { TextInputContainerStyle, TextInputStyle, TextInputLabelStyle } from './TextInputStyle';

interface TextInputProps extends React.ComponentPropsWithRef<'input'> {
  label?: string | undefined | null,
  disabled?: boolean,
  required?: boolean,
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props: TextInputProps, ref) => {
  const { label, ...rest } = props;

  return (
    <div className={clsx(TextInputContainerStyle)}>
      <label className={clsx(TextInputLabelStyle)}>
        {label}
      </label>
      <input
        className={clsx(TextInputStyle)}
        {...rest}
        ref={ref}
      />
    </div>
  );
});
TextInput.displayName='TextInput';

export default TextInput;