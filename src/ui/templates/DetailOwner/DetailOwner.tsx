import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { OwnerCard } from '@molecules';
import { DetailStyles } from './Styles';
import { PetList } from '@organisms';
import { Owner } from '@store';
import { generateInitials } from '@utils';

export type DetailOwnerProps = {
  owner: Owner;
  onToggleFavorite: (owner: Owner) => void;
};

export const DetailOwner: React.FC<DetailOwnerProps> = props => {
  const { owner, onToggleFavorite } = props;
  const ownerInitial = generateInitials(owner.name);

  return (
    <View style={DetailStyles.container}>
      <Text style={DetailStyles.title}>Owners Card</Text>
      <Pressable
        onPress={() => {
          console.log('here');
          onToggleFavorite(owner);
        }}
      >
        <OwnerCard
          initials={ownerInitial}
          firstName={owner.firstName}
          lastName={owner.lastName}
          isFavorite={owner.isFavorite}
        />
      </Pressable>

      <Text style={DetailStyles.title}>Cats</Text>
      <PetList pets={owner.pets} />
    </View>
  );
};
