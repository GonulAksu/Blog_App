import React from 'react';
import {createStore,combineReducers} from 'redux';
import reducer from './reducer.js';

//blogs store'rumuz bir obje dizisi içerisine action ile obje dispatch ediyoruz
const store = createStore(
    combineReducers({
        blogs:reducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)
  

export default store
