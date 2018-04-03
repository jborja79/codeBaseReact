import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

import reducers from '../reducers';
// import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}


const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

// sagaMiddleware.run(rootSaga);


export default store;
