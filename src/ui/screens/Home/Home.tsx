import React from 'react';
import { Owners } from '@templates';
import { useAppDispatch, useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { ownerList } = useAppSelector(state => state.Owners);

  return (
    <Owners
      owners={ownerList}
      onSelect={() => {}}
      selectedSort={'Name'}
      navigation={navigation}
    />
  );
};
