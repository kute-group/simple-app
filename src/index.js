import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './containers/Home';
import Contact from './containers/Contact';
import PostDetail from './containers/PostDetail';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';

const routing = (
  <Router>
    <Provider store={store}>
      <App>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id/:slug" component={PostDetail} />
        </div>
      </App>
    </Provider>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
