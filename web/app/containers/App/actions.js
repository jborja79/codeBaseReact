import * as actionTypes from './constants';

export function setLogo(payload) {
  return {
    type: actionTypes.SET_LOGO,
    logo: payload.logo,
    test: payload.test,
  };
}

export function getLogo() {
  return {
    type: actionTypes.GET_LOGO,
  };
}
