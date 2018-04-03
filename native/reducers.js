import { combineReducers } from 'redux-immutable';

// import the reducers
import AppReducer from '../web/app/containers/App/reducer';
import languageProviderReducer from '../web/app/containers/LanguageProvider/reducer';

export default combineReducers({
  app: AppReducer,
  language: languageProviderReducer,
});
