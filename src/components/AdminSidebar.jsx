import { Link, useLocation } from "react-router-dom";

export default function AdminSidebar({ onLogout }) {
  const loc = useLocation();

  return (
    <aside className="sidebar">
      <h2>CoffeeStore</h2>
      <nav>
        <Link to="/admin" className={loc.pathname === "/admin" ? "active" : ""}>
          Dashboard
        </Link>
        <Link to="/admin/usuarios" className={loc.pathname.includes("usuarios") ? "active" : ""}>
          Usuarios
        </Link>
        <Link to="/admin/productos" className={loc.pathname.includes("productos") ? "active" : ""}>
          Productos
        </Link>
      </nav>
      <div className="sidebar-footer">
        <button onClick={onLogout}>Cerrar sesión</button>
      </div>
    </aside>
  );
}
