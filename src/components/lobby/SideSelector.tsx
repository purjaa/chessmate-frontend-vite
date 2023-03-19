import { ReactComponent as WhiteSideIcon } from '../../assets/icon-side-white.svg';
import { ReactComponent as BlackSideIcon } from '../../assets/icon-side-black.svg';
import clsx from 'clsx';

export enum Side {
  White = 'white',
  Black = 'black'
}

interface SideSelectorProps {
  side: Side
  isSelected: boolean,
  onClick: () => void;
}

function SideSelector(props: SideSelectorProps) {
  const { side, isSelected, onClick } = props;
  const DIMENSIONS = 140;
  const SCALE_STYLE = '[&>*]:tw-scale-[3]';
  const SELECTED_STYLE = [
    'tw-border-4',
    'tw-border-ocean-500',
    'tw-rounded-lg'
  ];

  if (side === Side.White) {
    return (
      <WhiteSideIcon
        width={DIMENSIONS}
        height={DIMENSIONS}
        className={clsx(
          SCALE_STYLE,
          isSelected && SELECTED_STYLE
        )}
        onClick={onClick}
      />
    );
  }
  return (
    <BlackSideIcon
      width={DIMENSIONS}
      height={DIMENSIONS}
      className={clsx(
        SCALE_STYLE,
        isSelected && SELECTED_STYLE
      )}
      onClick={onClick}
    />
  );
}

export default SideSelector;