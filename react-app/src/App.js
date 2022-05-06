import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Splash from './components/Splash';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' >
          <Splash />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
