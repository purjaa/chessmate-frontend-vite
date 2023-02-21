import { ReactComponent as Logo } from '../../assets/logo.svg';
import { AppLogoStyle } from './AppLogoStyle';
import clsx from 'clsx';

function AppLogo() {
  return (
    <div className={clsx(AppLogoStyle)}>
      <Logo />
      Chessmate
    </div>
  );
}

export default AppLogo;