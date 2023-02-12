import React from 'react';
import clsx from 'clsx';
import { ButtonThemeType, ButtonThemeSize } from '../theme';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary'
};

export enum ButtonSize {
  Regular = 'regular',
  Small = 'small',
  Large = 'large'
};

export type ButtonProps = {
  type?: ButtonType;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>;

function Button(props: ButtonProps) {
  const { children, type, size, fullWidth, ...rest } = props;

  return (
    <button
      className={clsx(
        ButtonThemeType['common'],
        ButtonThemeType[type ?? ButtonType.Primary],
        ButtonThemeSize[size ?? ButtonSize.Regular],
        fullWidth && 'tw-w-full'
      )}
      {...rest}>
        {children}
    </button>
  );
}

export default Button;