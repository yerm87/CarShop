import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import authReducer from './reduxStore/authentication/Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const combinedReducer = combineReducers({
    authReducer: authReducer
});

const store = createStore(combinedReducer, composeEnhancer(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDom.render(app, document.querySelector('.root'));