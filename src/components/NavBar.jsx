import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-bold" to="/">TechStore</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/category/mouses">Mouses</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/teclados">Teclados</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/parlantes">Parlantes</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/category/impresoras">Impresoras</Link></li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
