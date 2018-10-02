import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css'

import reducers from './reducers';
import './style/index.css';
import App from './components/App';

const createNewStore = applyMiddleware(thunk)(createStore);
const store = createNewStore(reducers, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
