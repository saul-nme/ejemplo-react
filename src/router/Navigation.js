import React from 'react'
import {
   BrowserRouter as Router,
   Switch,
   Route,
} from "react-router-dom";
import Home from '../screens/Home';
import About from '../screens/About';
import Users from '../screens/Users';
import Contact from '../screens/Contact';

export default function Navigation() {
   return (
      <Router>
         {/* A <Switch> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
         <Switch>
            <Route path="/about">
               <About />
            </Route>
            <Route path="/users">
               <Users />
            </Route>
            <Route path="/contact">
               <Contact />
            </Route>
            <Route path="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   )
}
