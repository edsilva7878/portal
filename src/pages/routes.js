import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './home'
import User from './user'
import Financial from './financial'
import Wellcome from './wellcome'

export default function Routes(){
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { User }  path="/user" />
           <Route component = { Financial }  path="/financial" />
           <Route component = { Wellcome }  path="/wellcome" />
       </BrowserRouter>
   )
}