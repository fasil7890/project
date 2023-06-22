import React from 'react';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Home/Home';
import Signup from './Sign-up/Sign-up';
import Products from './Products/Products';
import Signin from "./Sign-in/Sign-in"
const RoutesPage = () => {
  return (
  <BrowserRouter>
    <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products/>} />
        </Routes>
  </BrowserRouter>
  )
}

export default RoutesPage