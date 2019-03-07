import { createStore, applyMiddleware } from 'redux';
import rootReducer from './'

import thunk from 'redux-thunk';
import reducer from './reducers';


export const store = createStore(reducer, applyMiddleware(thunk) , rootReducer);