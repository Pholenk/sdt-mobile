import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import {Button} from '@atoms';

describe('Button', () => {
  it('renders correctly', () => {
    const onPress = jest.fn();
    render(<Button title="Test Button" onPress={onPress} />);

    expect(screen.getByText('Test Button')).toBeTruthy();
  });

  it('handles press correctly', () => {
    const onPress = jest.fn();
    render(<Button title="Test Button" onPress={onPress} />);

    fireEvent.press(screen.getByText('Test Button'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('handles disabled state correctly', () => {
    const onPress = jest.fn();
    render(<Button title="Test Button" onPress={onPress} disabled />);

    fireEvent.press(screen.getByText('Test Button'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
