import React, { useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import HomePage from './pages/HomePage';
import Panel from './pages/Panel';
import Register from './pages/Register';

import { useSelector } from 'react-redux';
import { usePersistantLogin } from './hooks/usePersistantLogin';

const App = () => {

  usePersistantLogin();

  const loggedIn = useSelector((state) => state.user.loggedIn);

  useEffect(() => {

    console.log(loggedIn);

  }, [loggedIn]);

  return (
    <div>
       <Router>
        { loggedIn === false ? <Redirect from="/" exact to="/login" /> : <Redirect from="/" exact to="/panel" /> }
        <Switch>
          <Route path="/login">
            <HomePage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/panel">
            <Panel />
          </Route>
        </Switch>
    </Router>
    </div>
  )
}

export default App
