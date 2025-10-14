// src/pages/Producto-detalle.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useProductos } from "../store/useProductos";
import { useCarrito } from "../store/useCarrito";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/catalogo.css";

export default function ProductoDetalle() {
  const { id } = useParams();
  const productos = useProductos((s) => s.productos);
  const { agregar } = useCarrito();
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
  // Recarga datos desde localStorage cuando se monta
  const data = localStorage.getItem("carrito");
  if (data) {
    useCarrito.setState({ items: JSON.parse(data) });
  }
  }, []);

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

  const handleAgregar = () => {
    agregar(producto, cantidad);
    alert(`✅ ${cantidad} unidad(es) de "${producto.nombre}" añadida(s) al carrito`);
  };

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
              value={cantidad}
              onChange={(e) => setCantidad(parseInt(e.target.value))}
            />
          </div>
          <button className="btn-agregar-carrito" onClick={handleAgregar}>
            Añadir al Carrito
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}


