import React from 'react';
import { Text, View } from 'react-native';
import { PetStyle } from './Style';
import { ChevronRight } from '@assets';
import { theme } from '@themes';

export type PetRowProps = {
  id: string;
  name: string;
  age: string;
};

export const PetRow: React.FC<PetRowProps> = ({ name, age }) => {
  return (
    <View style={PetStyle.container}>
      <View style={PetStyle.textContainer}>
        <Text style={PetStyle.name}>{name}</Text>
        <Text style={PetStyle.age}>Age: {age}</Text>
      </View>
      <View style={PetStyle.iconContainer}>
        <ChevronRight color={theme.colors.avatarCardBackground} />
      </View>
    </View>
  );
};
