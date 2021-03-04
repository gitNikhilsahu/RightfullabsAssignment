import { combineReducers } from 'redux';

import dropdownReducer from './dropdownReducer';
import crudReducer from './crudReducer';

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  crud: crudReducer,
});

export default rootReducer;