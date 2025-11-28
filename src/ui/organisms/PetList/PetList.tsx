import React from 'react';
import { FlatList, ListRenderItem, Pressable, View } from 'react-native';
import { PetListStyles } from './Styles';
import { PetRow, PetRowProps } from '@molecules';

export type PetListProps = {
  pets: PetRowProps[];
};

export const PetList: React.FC<PetListProps> = props => {
  const keyExtractor = (item: PetRowProps, x: number) =>
    `pet-${item.name}-${x}`;

  const RenderRow: ListRenderItem<PetRowProps> = ({ item }) => (
    <PetRow id={item.id} name={item.name} age={item.age} />
  );

  return (
    <View style={PetListStyles.container}>
      <FlatList
        renderItem={RenderRow}
        data={props?.pets}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
