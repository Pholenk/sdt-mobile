import React from 'react';
import { View } from 'react-native';
import { OwnersStyles } from './Styles';
import { OwnerList, OwnerListProps } from '@organisms';
import { SortRow, SortRowProps } from '@molecules';
import { Owner } from '@store';
import { NavigationProp, NavigationState } from '@react-navigation/native';

export type OwnersTemplateProps = Omit<OwnerListProps, 'onPressItem'> &
  Omit<SortRowProps, 'value'> & {
    selectedSort: 'Name' | 'Cat';
    navigation: Omit<
      NavigationProp<ReactNavigation.RootParamList>,
      'getState'
    > & {
      getState(): NavigationState | undefined;
    };
  };

export const Owners: React.FC<OwnersTemplateProps> = props => {
  const handleOnPressCard = (owner: Owner) => {
    if (typeof props.navigation.navigate === 'function') {
      props.navigation.navigate('Details', { id: owner.id });
    }
  };

  return (
    <View style={OwnersStyles.container}>
      <SortRow value={props.selectedSort || 'Name'} onSelect={props.onSelect} />
      <OwnerList owners={props.owners} onPressItem={handleOnPressCard} />
    </View>
  );
};
