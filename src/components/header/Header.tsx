import React from 'react';
import AppLogo from './AppLogo';
import LanguageSelector from './LanguageSelector';
import { HeaderStyle } from './HeaderStyle';
import clsx from 'clsx';

function Header() {
  return (
    <header className={clsx(HeaderStyle)}>
      <AppLogo />
      <LanguageSelector />
    </header>
  );
}

export default Header;