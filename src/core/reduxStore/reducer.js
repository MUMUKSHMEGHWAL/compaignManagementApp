import { combineReducers } from 'redux';

import AppReducer from '../../components/home/reducer';

export default combineReducers({
  AppState: AppReducer
});
