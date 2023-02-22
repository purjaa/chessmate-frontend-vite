import React from 'react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { LanguageSelectButtonStyle } from './LanguageSelectButtonStyle';

type Props = {
  languageCode: string,
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  children?: React.ReactNode;
};

function LanguageSelectButton(props: Props) {
  const { languageCode, onClick, children } = props;
  const { i18n } = useTranslation();

  const isSelected = () => {
    return languageCode === i18n.language;
  };

  return (
    <a
      className={clsx(
        LanguageSelectButtonStyle.common,
        !isSelected() && LanguageSelectButtonStyle.unselected
      )}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default LanguageSelectButton;