import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Router from '../src/routes/routes'
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)



function App() {
    return (
      <Router/>
    );
}

export default App;
