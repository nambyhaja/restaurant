import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch  } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import Login from './Admin/Login';
import Notfound from './Error/NotFound';
import Restaurant from './Components/Restaurant';
import Accueil from './Accueil';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


const routing = (
    <Router>
      <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/admin/ajout">Ajout</Link>
            </li>
            <li>
            <Link to="/admin/login">Login</Link>
            </li>
            <li>
            <Link to="/accueil">Accueil</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/accueil" component={Accueil} />
            <Route path="/admin/login" component={Login} />
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
)
  
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
