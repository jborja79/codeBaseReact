import { fromJS } from 'immutable';

import AppReducer from '../reducer';
import {
  SET_LOGO,
} from '../constants';

describe('AppReducer', () => {
  it('returns the initial state', () => {
    expect(AppReducer(undefined, {})).toEqual(fromJS({
      logo: '',
    }));
  });

  it('changes the locale', () => {
    expect(AppReducer(undefined, { type: SET_LOGO, logo: 'logo' }).toJS()).toEqual({
      logo: 'logo',
    });
  });
});
