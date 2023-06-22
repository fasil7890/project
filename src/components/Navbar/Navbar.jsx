import React, { useState } from "react";
import logo from "../../assets/logo-store.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  function pathMatchesRoute(route) {
    return route === location.pathname;
  }

  const handleSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img className="navbar-logo-image" src={logo} alt="logo" />
        </div>
        <div className="navbar-title">
          <h1 className="navbar-title-h1">Store</h1>
        </div>
      </div>
      <div className="navbar-right">
        <div
          className={`nav-item p-2 ${
            pathMatchesRoute("/sign-in") ? "active" : ""
          } ${isHovered ? "hovered" : ""}`}
          onClick={handleSignIn}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
         //  style={{ cursor: isHovered ? "pointer" : "default" }}
        >
<button type="button" class="btn btn-primary">Sign In</button>
           
        </div>
      </div>
    </div>
  );
};

export default Navbar;
