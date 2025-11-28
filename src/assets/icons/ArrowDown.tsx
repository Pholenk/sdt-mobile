import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';
import { theme } from '@themes';

export const ArrowDown: React.FC<IconProps> = props => {
  const width = props?.width ?? 32;
  const height = props?.height ?? 32;
  const color = props?.color ?? theme.colors.background;

  return (
    <Svg
      height={`${height}px`}
      width={`${width}px`}
      fill={`${color}`}
      viewBox="0 -960 480 960"
    >
      <Path d="M480-373.85 303.85-549.59h352.3L480-373.85Z" />
    </Svg>
  );
};
