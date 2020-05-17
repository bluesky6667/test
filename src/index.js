import './polyfills'
import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import { HashRouter } from 'react-router-dom';
import './assets/base.scss';
import Main from './Home';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import axios from 'axios';


axios.defaults.baseURL = process.env.REACT_APP_API_REQUEST_URL;
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';

const store = configureStore();
const rootElement = document.getElementById('root');

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <Component />
            </HashRouter>
        </Provider>,
        rootElement
    );
};

renderApp(Main);

if (module.hot) {
    module.hot.accept('./Home', () => {
        const NextApp = require('./Home').default;
        renderApp(NextApp);
    });
}
serviceWorker.unregister();

