import { fromJS } from 'immutable';
import { ADD_ROOM, SET_ROOMS } from './constants';

const initialState = fromJS([]);

function RommsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ROOMS:
      return (fromJS(action.payload)); // { id: 1, name: 'sss' }
    case ADD_ROOM:
      return state.push(fromJS(action.payload)); // { id: 1, name: 'sss' }
    default:
      return state;
  }
}

export default RommsReducer;
