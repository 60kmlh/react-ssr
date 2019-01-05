import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.hydrate(
    <BrowserRouter>
        <App initCount={window.__initCount__} />
    </BrowserRouter>
    , document.getElementById('app'))