import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Home/Home';

const RoutesPage = () => {
  return (
  <BrowserRouter>
    <Home/>
  </BrowserRouter>
  )
}

export default RoutesPage