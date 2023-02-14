import React from 'react';
import clsx from 'clsx';
import { ButtonStyleVariant, ButtonStyleSize } from './ButtonStyle';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary'
}

export enum ButtonSize {
  Regular = 'regular',
  Small = 'small',
  Large = 'large'
}

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  disabled?: boolean;
}

function Button(props: ButtonProps) {
  const { children, className, variant, size, fullWidth, ...rest } = props;

  return (
    <button
      className={clsx(
        className,
        ButtonStyleVariant['common'],
        ButtonStyleVariant[variant ?? ButtonVariant.Primary],
        ButtonStyleSize[size ?? ButtonSize.Regular],
        fullWidth && 'tw-w-full'
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;