import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {buttonStyles} from './ButtonStyles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Button = ({title, onPress, disabled}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[buttonStyles.button, disabled && buttonStyles.disabled]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={buttonStyles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
