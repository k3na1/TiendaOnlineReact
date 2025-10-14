import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/style.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#3e2723" }}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={{ color: "#f0a500" }}>
          CoffeeShop
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            {[
              { path: "/", name: "Inicio" },
              { path: "/productos", name: "Productos" },
              { path: "/contacto", name: "Contacto" },
              { path: "/blogs", name: "Blogs" },
              { path: "/nosotros", name: "Nosotros" },
              { path: "/carrito", name: "🛒 Carrito" },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link fw-semibold ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                  to={item.path}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex gap-3 ms-3">
            <Link
              className="btn fw-bold px-3"
              style={{
                backgroundColor: "#f0a500",
                color: "#3e2723",
                transition: "0.2s",
              }}
              to="/registro"
            >
              Registro
            </Link>
            <Link
              className="btn fw-bold px-3"
              style={{
                backgroundColor: "#f0a500",
                color: "#3e2723",
                transition: "0.2s",
              }}
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
