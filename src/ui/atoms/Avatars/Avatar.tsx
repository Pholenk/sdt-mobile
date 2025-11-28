import React from 'react';
import { ColorValue, Text, View } from 'react-native';
import { avatarStyle } from './Styles';

interface Props {
  initials: string;
  isHeaderComponent?: boolean;
}

export const Avatar: React.FC<Props> = ({ initials, ...props }) => {
  const wrapperStyle = props?.isHeaderComponent
    ? [avatarStyle.wrapper, avatarStyle.wrapperWhite]
    : avatarStyle.wrapper;
  const labelStyle = props?.isHeaderComponent
    ? [avatarStyle.label, avatarStyle.wrapperWhiteLabel]
    : avatarStyle.label;
  return (
    <View style={wrapperStyle}>
      <Text style={labelStyle}>{initials}</Text>
    </View>
  );
};
