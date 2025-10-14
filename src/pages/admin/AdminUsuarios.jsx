import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuarios } from "../../store/useUsuarios";
import { useProductos } from "../../store/useProductos";
import { useAuth } from "../../store/useAuth";

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
    <div className="container-fluid bg-light min-vh-100 p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bold text-primary">Panel de Control</h1>
        <button onClick={logout} className="btn btn-outline-danger">Cerrar sesión</button>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-2">
          <div className="card text-center border-0 shadow-sm">
            <div className="card-body">
              <h6>Usuarios</h6>
              <h4>{totalUsuarios}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center border-0 shadow-sm">
            <div className="card-body">
              <h6>Vendedores</h6>
              <h4>{totalVendedores}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center border-0 shadow-sm">
            <div className="card-body">
              <h6>Clientes</h6>
              <h4>{totalClientes}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center border-0 shadow-sm">
            <div className="card-body">
              <h6>Productos</h6>
              <h4>{totalProductos}</h4>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className="card text-center border-0 shadow-sm">
            <div className="card-body">
              <h6>Stock total</h6>
              <h4>{totalStock}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm border-0">
        <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Usuarios recientes</h5>
          <button
            className="btn btn-light btn-sm"
            onClick={() => navigate("/admin/usuarios")}
          >
            Ver todos
          </button>
        </div>
        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead className="table-secondary">
              <tr>
                <th>RUN</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {recientes.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted">
                    Sin usuarios registrados
                  </td>
                </tr>
              ) : (
                recientes.map((u) => (
                  <tr key={u.run}>
                    <td>{u.run}</td>
                    <td>{u.nombre} {u.apellidos}</td>
                    <td>{u.correo}</td>
                    <td>
                      <span className="badge bg-info text-dark">{u.tipo}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
