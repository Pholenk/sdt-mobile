import { theme } from '@themes';
import { IconProps } from './types';
import Svg, { Path } from 'react-native-svg';

export const Star = (props: IconProps) => {
  const width = props?.width ?? 24;
  const height = props?.height ?? 24;
  const color = props?.color ?? theme.colors.background;

  return (
    <Svg
      height={`${height}px`}
      width={`${width}px`}
      fill={`${color}`}
      viewBox="0 -960 960 960"
    >
      <Path d="m263-161.54 57.31-246.77-191.46-165.92 252.61-21.92L480-828.84l98.54 232.69 252.61 21.92-191.46 165.92L697-161.54 480-292.46 263-161.54Z" />
    </Svg>
  );
};
