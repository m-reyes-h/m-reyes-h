import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import Chat from './pages/Chat';
import Home from './pages/Home';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { auth } from './services/firebase';

//---------------------------------------------------------------

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

//---------------------------------------------------------------

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}


function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
