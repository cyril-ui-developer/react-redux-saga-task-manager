import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import taskReducer from './reducers'
import { loadToDoList } from './actions';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(taskReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadToDoList());

ReactDOM.render(
  
  <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>, 
document.getElementById('root'));


