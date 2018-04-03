import {
  setLogo,
} from '../actions';

import {
  SET_LOGO,
} from '../constants';

describe('App  actions', () => {
  describe('Change logo', () => {
    it('has a type of SET_LOGO', () => {
      const expected = {
        type: SET_LOGO,
        logo: 'logo',
      };
      expect(setLogo('logo')).toEqual(expected);
    });
  });
});
