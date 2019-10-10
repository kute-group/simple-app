import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Themes from './containers/Themes';
import Courses from './containers/Courses';
import Services from './containers/Services';
import News from './containers/News';
import Contact from './containers/Contact';
import PostDetail from './containers/PostDetail';
import NotFound from './containers/NotFound';

import * as serviceWorker from './serviceWorker';
import store from './redux/store';

const routing = (
  <Router>
    <Provider store={store}>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/themes" component={Themes} />
          <Route path="/courses" component={Courses} />
          <Route path="/news" component={News} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id/:slug" component={PostDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Provider>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
