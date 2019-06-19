import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import { CreateBillPage } from './pages/CreateBillPage/CreateBillPage';
import './styles/index.css';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <Switch>
      <Route exact={true} path="/" component={CreateBillPage}/>
    </Switch>
  </Router>
, document.getElementById('root'));
registerServiceWorker();