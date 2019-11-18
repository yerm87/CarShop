import App from './App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDom from "react-dom";

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

ReactDom.render(app, document.querySelector('.root'));