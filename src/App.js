import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Enter from './Enter/Enter';
import People from './People/People';
import NotFound from './NotFound';

// load env variables
require('dotenv').config();

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/enter" component={Enter} />
      <Route exact path="/people" component={People} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
