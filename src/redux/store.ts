import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
const initialState = {};

const middleware = [thunk];

const applyMiddlewareWithDevTools = compose(composeWithDevTools, applyMiddleware);

const store = createStore(rootReducer, initialState, applyMiddlewareWithDevTools(...middleware));

export default store