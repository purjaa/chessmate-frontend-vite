import React from 'react';
import { ButtonTypeTheme } from '../theme';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export type ButtonProps = {
  type: ButtonType
  disabled?: boolean
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { type, children, ...rest } = props;

  return (
    <button className={ButtonTypeTheme[type]} {...rest}>{children}</button>
  )
}

export default Button;