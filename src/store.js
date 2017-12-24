import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(reducers, composeEnhancers(applyMiddleware(ReduxPromise)));
