import React from 'react';
import clsx from 'clsx';
import { ButtonStyleType, ButtonStyleSize } from './ButtonStyle';

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
  const { children, className, type, size, fullWidth, ...rest } = props;

  return (
    <button
      className={clsx(
        className,
        ButtonStyleType['common'],
        ButtonStyleType[type ?? ButtonType.Primary],
        ButtonStyleSize[size ?? ButtonSize.Regular],
        fullWidth && 'tw-w-full'
      )}
      {...rest}>
        {children}
    </button>
  );
}

export default Button;