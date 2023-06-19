import React from 'react';
import logo from "../../assets/logo-store.png"
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
        <div className="navbar-logo">
        <img className='navbar-logo-image' src={logo} alt="logo" />
     </div>
     <div className="navbar-title">
        <h1 className='navbar-title-h1'>Store</h1>
     </div>
        </div>
        <div className="navbar-right">
        <Link className='navbar-signin-link'><p>SignIn</p></Link>
     </div>
    </div>
  )
}

export default Navbar 