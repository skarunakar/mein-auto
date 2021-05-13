import { combineReducers } from 'redux';
import filters from './filters';
import cars from './cars';

const rootReducer = combineReducers({
    filters,
    cars,
    
});

export type RootReducerSate = ReturnType<typeof rootReducer>;
export default rootReducer;