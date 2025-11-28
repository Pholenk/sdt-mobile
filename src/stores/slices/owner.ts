import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Pet = { id: string; name: string; age: string };
export type Owner = {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  isFavorite: boolean;
  pets: Pet[];
};

interface OwnersState {
  ownerList: Owner[];
  sort: 'Name' | 'Cat';
}

const initialState: OwnersState = {
  sort: 'Name',
  ownerList: [
    {
      id: '1',
      name: 'John Lennon',
      firstName: 'John',
      lastName: 'Lennon',
      isFavorite: true,
      pets: [
        {
          id: '1',
          name: 'Snowball',
          age: '4 years 0 month',
        },
        {
          id: '2',
          name: 'Blackly',
          age: '2 years 3 month',
        },
      ],
    },
    {
      id: '2',
      name: 'Paul McCartney',
      firstName: 'Paul',
      lastName: 'McCartney',
      isFavorite: false,
      pets: [
        {
          id: '3',
          name: 'Carrot',
          age: '1 years 0 month',
        },
        {
          id: '4',
          name: 'Peas',
          age: '1 years 3 month',
        },
      ],
    },
    {
      id: '3',
      name: 'Georgia Harrison',
      firstName: 'Georgia',
      lastName: 'Harrison',
      isFavorite: false,
      pets: [
        {
          id: '5',
          name: 'Cow',
          age: '3 years 0 month',
        },
        {
          id: '6',
          name: 'Duck',
          age: '2 years 4 month',
        },
      ],
    },
    {
      id: '4',
      name: 'Ringo Starr',
      firstName: 'Ringo',
      lastName: 'Starr',
      isFavorite: false,
      pets: [
        {
          id: '7',
          name: 'Square',
          age: '1 years 6 month',
        },
        {
          id: '8',
          name: 'Elips',
          age: '4 years 2 month',
        },
        {
          id: '9',
          name: 'Circle',
          age: '1 years 6 month',
        },
      ],
    },
  ],
};

const owners = createSlice({
  name: 'owners',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Owner>) => {
      const newOwnerList = state.ownerList.map(owner => {
        return {
          ...owner,
          isFavorite: owner.id === action.payload.id,
        };
      });

      state.ownerList = newOwnerList;
    },
    selectSort: (
      state,
      action: PayloadAction<{ selectedSort: 'Name' | 'Cat' }>,
    ) => {
      console.log(action.payload.selectedSort);

      state.sort = action.payload.selectedSort;
    },
  },
});

export const { toggleFavorite, selectSort } = owners.actions;
export const { reducer: ownerSlice } = owners;
