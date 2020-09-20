import React from 'react'
import {Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Profile from './components/pages/Profile'

const App = () => {
 return (
   <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/:name" render={() => <Profile/>} />
   </Switch>
  );
}

export default App;
