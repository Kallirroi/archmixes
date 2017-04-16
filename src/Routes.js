import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Connect from './Connect';
import About from './About';
import Instruction from './Instruction';
import Event from './Event';

const Routes = (props) => (
 <Router {...props}>
   <Route component={App}>
       <Route path="/" component={Connect} />
       <Route path="/instruction" component={Instruction} />
       <Route path="/about" component={About} />
       <Route path="/event" component={Event} />
   </Route>
 </Router>

);
export default Routes;