// src/pages/Productos.jsx
import { Link } from "react-router-dom";
import { useProductos } from "../store/useProductos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/catalogo.css";
import "../assets/styles/header.css";

export default function Productos() {
  const productos = useProductos((s) => s.productos);

  return (
    <>
      <Navbar />
      <main className="productos-page">
        <h1>Nuestros Productos</h1>
        <div id="productos-container" className="productos-grid">
          {productos.length === 0 ? (
            <p>No hay productos disponibles.</p>
          ) : (
            productos.map((p) => (
              <div key={p.id} className="producto-card">
                <img src={p.imagen} alt={p.nombre} />
                <h3>{p.nombre}</h3>
                <p>${p.precio.toLocaleString("es-CL")}</p>
                <Link to={`/productos/${p.id}`} className="btn">
                  Ver Detalle
                </Link>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
