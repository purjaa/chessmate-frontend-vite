import React, { useState } from 'react';
import SideSelector, { Side } from './SideSelector';
import {
  Button
} from  '../';
import { useTranslation } from 'react-i18next';

interface GameSetupPaneProps {
  opponent: string
}

function GameSetupPane(props: GameSetupPaneProps) {
  const { t } = useTranslation(['lobby']);
  const { opponent } = props;
  const [selectedSide, setSelectedSide] = useState<Side>(Side.White);

  return (
    <div className="tw-bg-white tw-rounded-md tw-shadow-lg tw-pb-4">
      <h3 className='tw-text-center'>
        {t('lobby:setUpGame')}
      </h3>
      <div className="tw-text-center">
        <span>{t('lobby:youAreChallenging')} </span>
        <span className="tw-font-bold">{opponent}</span>
      </div>
      <div className='tw-w-full tw-mt-6'>
        <div className="tw-text-center">
          {t('lobby:chooseSide')}
        </div>
        <div className='tw-flex tw-justify-around'>
          <SideSelector
            side={Side.White}
            isSelected={selectedSide === Side.White}
            onClick={() => setSelectedSide(Side.White)}
          />
          <SideSelector
            side={Side.Black}
            isSelected={selectedSide === Side.Black}
            onClick={() => setSelectedSide(Side.Black)}
          />
        </div>
      </div>
      <div className='tw-pt-16 tw-px-20'>
        <Button fullWidth={true}>
          {t('lobby:startGame')}
        </Button>
      </div>
    </div>
  );
}

export default GameSetupPane;