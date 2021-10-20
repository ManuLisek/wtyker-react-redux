import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import ProductsList from './ProductsList';
import MainLayout from './MainLayout';

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={ProductsList} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;