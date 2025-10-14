// src/pages/ProductoDetalle.jsx
import { useParams } from "react-router-dom";
import { useProductos } from "../store/useProductos";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/catalogo.css";

export default function ProductoDetalle() {
  const { id } = useParams();
  const productos = useProductos((s) => s.productos);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return (
      <>
        <Navbar />
        <main className="producto-detalle-grid">
          <p>Producto no encontrado.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="producto-detalle-grid">
        <div className="detalle-img">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="detalle-info">
          <h2>{producto.nombre}</h2>
          <p className="precio">${producto.precio.toLocaleString("es-CL")}</p>
          <p className="descripcion">{producto.descripcion}</p>
          <div className="cantidad-selector">
            <label htmlFor="cantidad">Cantidad:</label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              min="1"
              max={producto.stock}
              defaultValue="1"
            />
          </div>
          <button className="btn-agregar-carrito">Añadir al Carrito</button>
        </div>
      </main>
      <Footer />
    </>
  );
}
 