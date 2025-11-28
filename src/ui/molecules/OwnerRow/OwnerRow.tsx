import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import { ownerStyle } from './Style';
import { Avatar } from '@atoms';
import { ChevronRight, Star } from '@assets';
import { theme } from '@themes';
import { generateInitials } from '@utils';

export type OwnerRowProps = {
  id: string;
  name: string;
  isFavorite: boolean;
};

export const OwnerRow: React.FC<OwnerRowProps> = ({ name, isFavorite }) => {
  const starColor = useMemo(
    () => (isFavorite ? theme.colors.starActive : theme.colors.starInactive),
    [isFavorite],
  );

  return (
    <View style={ownerStyle.container}>
      <Avatar initials={generateInitials(name)} />
      <Text style={ownerStyle.label}>{name}</Text>
      <View style={ownerStyle.iconContainer}>
        <Star color={starColor} />
        <ChevronRight color={theme.colors.avatarCardBackground} />
      </View>
    </View>
  );
};
