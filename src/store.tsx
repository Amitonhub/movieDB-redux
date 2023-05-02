import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './Reducers/RootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware]
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
