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
import Ajout from './Admin/Ajout';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


const routing = (
    <Router>
      <div>
        <Switch>
            <Route exact path="/" component={Accueil} />
            <Route path="/app" component={App} />
            <Route path="/admin/login" component={Login} />
            <Route path="/admin/ajout" component={Ajout} />
            <Route path="/restaurant/:id" component={Restaurant} />
            <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
)
  
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister(); 
