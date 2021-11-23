import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Home';
import ProductsList from './ProductsList/ProductsListContainer';
import Product from './Product/ProductContainer';
import Cart from './Cart/CartContainer';
import MainLayout from './MainLayout';
import NotFound from './NotFound';

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={ProductsList} />
          <Route exact path='/product/:id' component={Product} />
          <Route exact path='/cart' component={Cart} />
          <Route render={() => <Redirect to={{pathname: '/not-found'}} />} component={NotFound}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;