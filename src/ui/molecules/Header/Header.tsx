import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '@atoms';
import { HeaderStyle } from './Styles';
import { useAppSelector } from '@hooks';
import { generateInitials } from '@utils';

export const Header = () => {
  const { ownerList } = useAppSelector(state => state.Owners);
  const favoriteMaster = useMemo(
    () => ownerList.find(item => item.isFavorite),
    [ownerList],
  );
  const favoriteMasterInitial = generateInitials(favoriteMaster?.name ?? '');

  return (
    <View style={HeaderStyle.header}>
      <Avatar initials={favoriteMasterInitial} isHeaderComponent />
      <Text style={HeaderStyle.headerTitle}>
        Master: {favoriteMaster?.name}
      </Text>
    </View>
  );
};
