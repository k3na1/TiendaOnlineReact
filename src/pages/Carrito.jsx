import { Link, useNavigate } from "react-router-dom";
import { useCarrito } from "../store/useCarrito";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/carrito.css";

export default function Carrito() {
  const navigate = useNavigate();
  const { items, eliminar, vaciar, actualizar } = useCarrito();

  const subtotal = items.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  const envio = items.length > 0 ? 4000 : 0;
  const total = subtotal + envio;

  return (
    <>
      <Navbar />
      <main className="carrito-page">
        <h1>Mi Carrito de Compras</h1>

        {items.length === 0 ? (
          <p>Tu carrito está vacío.</p>
        ) : (
          <div className="carrito-layout">
            <div className="carrito-items">
              {items.map((p) => (
                <div key={p.id} className="carrito-item">
                  <img src={p.imagen} alt={p.nombre} />
                  <div className="carrito-item-info">
                    <h3>{p.nombre}</h3>
                    <p>Precio: ${p.precio.toLocaleString("es-CL")}</p>
                  </div>
                  <div className="carrito-item-actions">
                    <input
                      type="number"
                      min="1"
                      max={p.stock}
                      value={p.cantidad}
                      onChange={(e) => actualizar(p.id, parseInt(e.target.value))}
                    />
                    <p>
                      Subtotal: <strong>${(p.precio * p.cantidad).toLocaleString("es-CL")}</strong>
                    </p>
                    <button onClick={() => eliminar(p.id)}>Eliminar</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="carrito-summary">
              <h2>Resumen</h2>
              <div className="summary-line">
                <span>Subtotal:</span> <strong>${subtotal.toLocaleString("es-CL")}</strong>
              </div>
              <div className="summary-line">
                <span>Envío:</span> <strong>${envio.toLocaleString("es-CL")}</strong>
              </div>
              <div className="summary-line total">
                <span>Total:</span> <strong>${total.toLocaleString("es-CL")}</strong>
              </div>
              <button className="btn-principal" onClick={() => navigate("/pago")}>
                Proceder al Pago
              </button>
              <button className="btn-secundario" onClick={vaciar}>
                Vaciar Carrito
              </button>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
