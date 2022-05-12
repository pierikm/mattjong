import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { loadDeck } from './store/game';
import Splash from './components/Splash';
import './App.css';


function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   (async () => {
  //     await dispatch(loadDeck())
  //   })();
  // }, [dispatch]);

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
