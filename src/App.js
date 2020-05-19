import React from 'react';
import './App.scss';
import Dashboard from './components/Dashboard/Dashboard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import OrderForm from './components/OrderForm/OrderForm';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route path="/login" render={() => <OrderForm />} />
      </Switch>
    </BrowserRouter>
  )
};

export default App;
