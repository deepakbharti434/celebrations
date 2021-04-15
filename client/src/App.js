import React from 'react';
import { Container} from '@material-ui/core';
import Navabar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route, } from 'react-router-dom'
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth'


const App = () => {
  

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
     <Navabar></Navabar>
     <Switch>
       <Route path='/' exact component={Home}></Route>
       <Route path='/auth' exact component={Auth}></Route>
     </Switch>
     
    </Container>
    </BrowserRouter>
    
  );
};

export default App;