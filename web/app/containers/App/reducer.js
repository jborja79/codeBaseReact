/*
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';

import * as actionType from './constants';

const initialState = fromJS({
  logo: '',
  test: '',
});

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.SET_LOGO:
      return state
        .set('logo', action.logo)
        .set('test', action.test);
    default:
      return state;
  }
}

export default AppReducer;
