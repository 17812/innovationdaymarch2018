import React from 'react';
import PageNotFound from '../components/PageNotFound';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import Workflows from '../components/Workflows';
import FooterSection from '../components/FooterSection';
import {BrowserRouter, Route, Switch} from 'react-router-dom';




const AppRouter =()=>(
  <BrowserRouter>
    <div>
      <Navigation />         
      <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/workflows' component={Workflows} />
        <Route component={PageNotFound} />
      </Switch>        
      <FooterSection />
    </div>
  </BrowserRouter>
);

export default AppRouter;