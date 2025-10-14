// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import "../assets/styles/header.css";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-title">CoffeeShop</div>
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/carrito">🛒 Carrito</Link>
        </div>
        <div className="navbar-auth" id="navbarAuth">
          <Link to="/registro">Registro</Link>
          <Link to="/login">Login</Link>
        </div>
      </nav>
    </header>
  );
}
