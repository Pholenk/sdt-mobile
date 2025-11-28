import React from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { OwnerListStyles } from './Styles';
import { OwnerRow, OwnerRowProps } from '@molecules';
import { Owner } from '@store';

export type OwnerListProps = {
  owners: OwnerRowProps[];
  onPressItem: (owner: Owner) => void;
};

export const OwnerList: React.FC<OwnerListProps> = props => {
  const keyExtractor = (item: OwnerRowProps, x: number) =>
    `owner-${item.name}-${x}`;

  const handleOnPress = (owner: Owner) => {
    if (typeof props?.onPressItem === 'function') {
      props.onPressItem(owner);
    }
  };

  const RenderRow: ListRenderItem<OwnerRowProps> = ({ item }) => (
    <Pressable onPress={() => handleOnPress(item)}>
      <OwnerRow id={item.id} name={item.name} isFavorite={item.isFavorite} />
    </Pressable>
  );

  return (
    <View style={OwnerListStyles.container}>
      <FlatList
        renderItem={RenderRow}
        data={props?.owners}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
