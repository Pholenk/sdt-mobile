import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { SortRowStyles } from './Styles';
import { ArrowDown } from '@assets';

export type SortRowProps = {
  value: 'Name' | 'Cat';
  onSelect: (selected: SortRowProps['value']) => void;
};

export const SortRow: React.FC<SortRowProps> = props => {
  const [show, setShow] = useState(false);

  const onPress = () => {
    setShow(true);
  };

  return (
    <>
      <View style={SortRowStyles.container}>
        <Text style={SortRowStyles.title}>Owners List</Text>
        <Pressable style={SortRowStyles.sortButton} onPress={onPress}>
          <Text style={SortRowStyles.label}>Sort By:</Text>
          <Text style={SortRowStyles.value}>{props?.value}</Text>
          <ArrowDown color={'#92929c'} width={28} />
        </Pressable>
      </View>
    </>
  );
};
