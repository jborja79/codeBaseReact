import { createSelector } from 'reselect';
// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route') || ''; // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};


const selectApp = (state) => state.get('app');

const makeSelectApp = () => createSelector(
  selectApp,
  (subState) => subState
);

const makeSelectAppLogo = () => createSelector(
  selectApp,
  (subState) => subState.get('logo')
);

export {
  makeSelectLocationState,
  makeSelectApp,
  makeSelectAppLogo,
};
