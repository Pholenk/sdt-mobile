import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';
import { theme } from '@themes';

export const ChevronRight: React.FC<IconProps> = props => {
  const width = props?.width ?? 24;
  const height = props?.height ?? 24;
  const color = props?.color ?? theme.colors.background;

  return (
    <Svg
      height={`${height}px`}
      width={`${width}px`}
      fill={`${color}`}
      viewBox="0 -960 480 960"
    >
      <Path d="M530.57-480.41 339.8-671.44l35.79-35.79 226.56 226.82-226.56 226.56-35.79-35.79 190.77-190.77Z" />
    </Svg>
  );
};
