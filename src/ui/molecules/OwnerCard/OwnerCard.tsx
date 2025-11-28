import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { Star } from '@assets';
import { OwnerCardStyles } from './Styles';
import { theme } from '@themes';

interface OwnerCardProps {
  initials: string;
  firstName: string;
  lastName: string;
  isFavorite: boolean;
}

export const OwnerCard: React.FC<OwnerCardProps> = ({
  initials,
  firstName,
  lastName,
  isFavorite,
}) => {
  const starColor = useMemo(
    () => (isFavorite ? theme.colors.starActive : theme.colors.starInactive),
    [isFavorite],
  );

  return (
    <View style={OwnerCardStyles.card}>
      <View style={OwnerCardStyles.avatarContainer}>
        <View style={OwnerCardStyles.avatar}>
          <Text style={OwnerCardStyles.avatarText}>{initials}</Text>
        </View>
      </View>
      <View style={OwnerCardStyles.textContainer}>
        <Text style={OwnerCardStyles.label}>First Name</Text>
        <Text style={OwnerCardStyles.value}>{firstName}</Text>

        <Text style={[OwnerCardStyles.label, { marginTop: 8 }]}>Last Name</Text>
        <Text style={OwnerCardStyles.value}>{lastName}</Text>
      </View>
      <View style={OwnerCardStyles.starContainer}>
        <Star width={32} height={32} color={starColor} />
      </View>
    </View>
  );
};
