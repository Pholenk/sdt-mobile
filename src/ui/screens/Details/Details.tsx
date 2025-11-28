import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks';
import { DetailOwner } from '@templates';
import { toggleFavorite } from '@store';

export const DetailsScreen = ({ route }) => {
  const ownerId = useMemo(() => route.params.id, []);
  const dispatch = useAppDispatch();
  const { ownerList } = useAppSelector(state => state.Owners);
  const owner = useMemo(
    () =>
      ownerList.find(owner => owner.id === ownerId) || {
        id: '',
        name: '',
        firstName: '',
        lastName: '',
        isFavorite: false,
        pets: [
          {
            id: '',
            name: '',
            age: '',
          },
        ],
      },
    [ownerList],
  );

  const handlePress = () => {
    dispatch(toggleFavorite(owner));
  };

  return <DetailOwner owner={owner} onToggleFavorite={handlePress} />;
};
