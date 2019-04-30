import { applyMiddleware, createStore, compose } from 'redux';
import middlewares from './middlewares';
import reducers from './reducers';

export { default as actions } from './actions';
export { default as selectors } from './selectors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));