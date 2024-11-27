import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux';
import { combineReducers } from 'redux';

//import itemsReducer from './reducers/itemsReducer'; // Example reducer

const rootReducer = combineReducers({
  items: itemsReducer,
});

const store = createStore(rootReducer);

export default store;


// export const store = configureStore({
//   reducer: {},
// })
