import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './Views/Home';
import ProductsList from './Views/ProductsList/ProductsListContainer';
import Product from './Views/Product/ProductContainer';
import Cart from './Views/Cart/CartContainer';
import MainLayout from './Components/MainLayout';
import NotFound from './Views/NotFound';
import ScrollToTop from './utilities/ScrollToTop';

function App() {

  return (
    <Router>
      <ScrollToTop>
        <MainLayout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/products' component={ProductsList} />
            <Route exact path='/product/:id' component={Product} />
            <Route exact path='/cart' component={Cart} />
            <Route render={() => <Redirect to={{pathname: '/not-found'}} />} component={NotFound}/>
          </Switch>
        </MainLayout>
      </ScrollToTop>
    </Router>
  );
}

export default App;