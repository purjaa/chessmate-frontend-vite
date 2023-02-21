import React from 'react';
import AppLogo from './AppLogo';
import { HeaderStyle } from './HeaderStyle';
import clsx from 'clsx';

function Header() {
  return (
    <header className={clsx(HeaderStyle)}>
      <AppLogo />
    </header>
  );
}

export default Header;