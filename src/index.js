import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './containers/Home';
import Contact from './containers/Contact';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <App>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </App>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
