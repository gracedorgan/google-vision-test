// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';

import PhotoReducer from './photo-reducer';

const rootReducer = combineReducers({
  photos: PhotoReducer,
});

export default rootReducer;
