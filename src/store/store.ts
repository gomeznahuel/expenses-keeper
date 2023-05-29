import { createStore } from 'redux';
import expenseReducer from './reducers/reducer';
import type { RootState } from './interfaces';

const store = createStore(expenseReducer);

export default store;
export type { RootState };