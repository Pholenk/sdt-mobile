import React, { useMemo, useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SortRowStyles } from './Styles';
import { ArrowDown } from '@assets';
import { Button } from '@atoms';

export type SortRowProps = {
  value: 'Name' | 'Cat';
  onSelect: (selected: SortRowProps['value']) => void;
};

export const SortRow: React.FC<SortRowProps> = props => {
  const [show, setShow] = useState(false);
  const sortType = useMemo(() => props.value, [props.value]);

  const onPress = () => {
    setShow(true);
  };

  const onCloseHandler = () => {
    setShow(false);
  };

  const handleSelect = (option: SortRowProps['value']) => {
    props.onSelect(option);
    setShow(false);
  };

  return (
    <>
      <View style={SortRowStyles.container}>
        <Text style={SortRowStyles.title}>Owners List</Text>
        <Pressable style={SortRowStyles.sortButton} onPress={onPress}>
          <Text style={SortRowStyles.label}>Sort By:</Text>
          <Text style={SortRowStyles.value}>{sortType}</Text>
          <ArrowDown color={'#92929c'} width={28} />
        </Pressable>
      </View>

      <Modal
        visible={show}
        transparent={true}
        animationType="fade"
        onRequestClose={onCloseHandler}
      >
        <TouchableOpacity
          style={SortRowStyles.overlay}
          activeOpacity={1}
          onPress={onCloseHandler}
        >
          <View style={SortRowStyles.modalContainer}>
            <View style={SortRowStyles.modalContent}>
              <Button title={'Name'} onPress={() => handleSelect('Name')} />
              <Button title={'Cats'} onPress={() => handleSelect('Cat')} />
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
};
