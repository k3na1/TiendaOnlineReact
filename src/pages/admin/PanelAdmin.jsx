import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuarios } from "../../store/useUsuarios";
import { useProductos } from "../../store/useProductos";
import { useAuth } from "../../store/useAuth";
import AdminSidebar from "../../components/AdminSidebar";
import "../../assets/styles/admin.css";

export default function PanelAdmin() {
  const { usuarios } = useUsuarios();
  const { productos } = useProductos();
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuario || usuario.tipo !== "Administrador") {
      navigate("/login");
    }
  }, [usuario, navigate]);

  const totalUsuarios = usuarios.length;
  const totalVendedores = usuarios.filter(u => u.tipo === "Vendedor").length;
  const totalClientes = usuarios.filter(u => u.tipo === "Cliente").length;
  const totalProductos = productos.length;
  const totalStock = productos.reduce((acc, p) => acc + (p.stock || 0), 0);

  const recientes = usuarios.slice(0, 5);

  return (
    <div className="admin-layout">
      <AdminSidebar onLogout={logout} />

      <main className="admin-content">
        <header className="topbar">
          <h1>Panel de control</h1>
        </header>

        <section className="kpis">
          <div className="kpi"><span>Usuarios</span><strong>{totalUsuarios}</strong></div>
          <div className="kpi"><span>Vendedores</span><strong>{totalVendedores}</strong></div>
          <div className="kpi"><span>Clientes</span><strong>{totalClientes}</strong></div>
          <div className="kpi"><span>Productos</span><strong>{totalProductos}</strong></div>
          <div className="kpi"><span>Stock total</span><strong>{totalStock}</strong></div>
        </section>

        <section className="panel">
          <h2>Usuarios recientes</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>RUN</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {recientes.length === 0 ? (
                <tr><td colSpan="4">Sin usuarios registrados</td></tr>
              ) : (
                recientes.map(u => (
                  <tr key={u.run}>
                    <td>{u.run}</td>
                    <td>{u.nombre} {u.apellidos}</td>
                    <td>{u.correo}</td>
                    <td>{u.tipo}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
          <button onClick={() => navigate("/admin/usuarios")} className="btn">
            Ver todos
          </button>
        </section>
      </main>
    </div>
  );
}
