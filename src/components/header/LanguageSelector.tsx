import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSelectButton from './LanguageSelectButton';

function LanguageSelector() {
  const { t, i18n } = useTranslation('language');

  const languageHandler = (language: string) => {
    i18n.changeLanguage(language).catch((err) => console.log(err));
  };

  return (
    <div className='tw-flex tw-items-center'>
      <LanguageSelectButton
        languageCode='en'
        onClick={() => languageHandler('en')}
      >
        {t('language:en')}
      </LanguageSelectButton>
      <div className='tw-w-px tw-bg-gray-100 tw-h-1/2 tw-mx-2.5'></div>
      <LanguageSelectButton
        languageCode='fi'
        onClick={() => languageHandler('fi')}
      >
        {t('language:fi')}
      </LanguageSelectButton>
    </div>
  );
}

export default LanguageSelector;