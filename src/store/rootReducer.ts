import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../../features/Counter/counterSlice';

const rootReducer = {
  counter: counterReducer,
  // customer: customerReducer
};

import rootReducer from './rootReducer';
const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;

export default rootReducer;
