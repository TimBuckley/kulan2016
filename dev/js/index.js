import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Find from './components/Find';
import Contact from './components/Contact';
import Guest from './components/Guest';
import Booking from './containers/Booking';

import getSpreadsheetData from './actions'

const logger = createLogger();
const store = createStore(
  rootReducer, compose(
  applyMiddleware(thunk, promise, logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f)
);

const tableUrl = "https://spreadsheets.google.com/feeds/list/1QxC20NcuHzqp1Fp7Dy2gpBDbJzN4YpmjiEcr7PSpsuM/od6/public/basic?alt=json";

store.dispatch(getSpreadsheetData(tableUrl));

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/find" component={Find}/>
          <Route path="/guest" component={Guest}/>
          <Route path="/booking" component={Booking}/>
        </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);


