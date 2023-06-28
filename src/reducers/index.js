import {combineReducers} from 'redux';
import {dataReducer} from './dataReducer';
// Import other reducers here

const rootReducer = combineReducers({
  data: dataReducer,
  // Add other reducers here
});

export default rootReducer;
