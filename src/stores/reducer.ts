import { combineReducers } from '@reduxjs/toolkit';
import { ownerSlice } from './slices';

export const rootReducer = combineReducers({
  Owners: ownerSlice,
});
