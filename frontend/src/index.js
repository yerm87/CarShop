import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from "react-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reduxStore/Reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDom.render(app, document.querySelector('.root'));