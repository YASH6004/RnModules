import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/combineReducer';
import logger from 'redux-logger';


const middleware = [logger,thunk]


const store =createStore(rootReducer,applyMiddleware(...middleware))

export default store; 