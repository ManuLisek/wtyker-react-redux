import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import MainLayout from './MainLayout';

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;