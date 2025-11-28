import React, { useMemo } from 'react';
import { Owners } from '@templates';
import { useAppDispatch, useAppSelector } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import { selectSort } from '@store';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const { ownerList, sort } = useAppSelector(state => state.Owners);
  const dispatch = useAppDispatch();

  const handleSelectSort = (selectedSort: 'Name' | 'Cat') => {
    dispatch(selectSort({ selectedSort }));
  };

  const sortedOwner = useMemo(() => {
    const newOrder = [...ownerList];
    if (sort === 'Name') {
      return newOrder.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (b.name > a.name) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    if (sort === 'Cat') {
      return newOrder.sort((a, b) => {
        if (b.pets.length > a.pets.length) {
          return 1;
        } else if (a.pets.length > b.pets.length) {
          return -1;
        } else {
          return 0;
        }
      });
    }

    return newOrder;
  }, [sort, ownerList]);

  return (
    <Owners
      owners={sortedOwner}
      onSelect={handleSelectSort}
      selectedSort={sort}
      navigation={navigation}
    />
  );
};
