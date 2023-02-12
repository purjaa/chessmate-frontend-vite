import React from 'react';
import clsx from 'clsx';
import { ButtonThemeType, ButtonThemeSize } from '../theme';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum ButtonSize {
  Regular = 'regular',
  Small = 'small',
  Large = 'large'
}

export type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize
  disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { children, type, size, ...rest } = props;

  return (
    <button
      className={clsx(ButtonThemeType['common'], ButtonThemeType[type ?? ButtonType.Primary], ButtonThemeSize[size ?? ButtonSize.Regular])}
      {...rest}>
        {children}
    </button>
  )
}

export default Button;