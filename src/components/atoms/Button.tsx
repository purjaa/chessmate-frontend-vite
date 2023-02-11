import React from 'react';
import { ButtonTheme } from '../theme';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export type ButtonProps = {
  type?: ButtonType
  disabled?: boolean
} & React.HTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { children, type, ...rest } = props;

  return (
    <button
      className={ButtonTheme[type ?? ButtonType.Primary]}
      {...rest}>
        {children}
    </button>
  )
}

export default Button;