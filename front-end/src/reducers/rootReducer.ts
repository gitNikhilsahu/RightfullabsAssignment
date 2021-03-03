import { combineReducers } from 'redux';

import dropdownReducer from './dropdownReducer';

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
});

export default rootReducer;