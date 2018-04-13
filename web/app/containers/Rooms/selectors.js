import { createSelector } from 'reselect';


const selectRooms = (state) => state.get('rooms');

export const makeSelectRooms = () => createSelector(
  selectRooms,
  (subState) => subState
);
