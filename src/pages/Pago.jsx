import { useState } from "react";
import { useCarrito } from "../store/useCarrito";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/carrito.css";

export default function Pago() {
  const { items, vaciar } = useCarrito();
  const [form, setForm] = useState({ nombre: "", direccion: "", ciudad: "", region: "", metodo: "tarjeta" });
  const [confirmado, setConfirmado] = useState(false);

  const subtotal = items.reduce((acc, p) => acc + p.precio * p.cantidad, 0);
  const envio = items.length > 0 ? 4000 : 0;
  const total = subtotal + envio;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de boleta
    const boletas = JSON.parse(localStorage.getItem("boletas")) || [];
    const nuevaBoleta = {
      id: `BL-${Date.now()}`,
      fecha: new Date().toLocaleDateString(),
      total,
      cliente: form.nombre,
      direccion: `${form.direccion}, ${form.ciudad}, ${form.region}`,
      metodo: form.metodo,
      items,
    };
    boletas.push(nuevaBoleta);
    localStorage.setItem("boletas", JSON.stringify(boletas));

    setConfirmado(true);
    vaciar();
  };

  return (
    <>
      <Navbar />
      <main className="pago-page">
        <h1>Simulación de Pago Online</h1>

        {confirmado ? (
          <div className="confirmacion">
            <h2>✅ ¡Gracias por tu compra!</h2>
            <p>Tu pedido ha sido registrado exitosamente.</p>
            <p>
              <strong>Boleta generada:</strong> BL-{Date.now().toString().slice(-6)}
            </p>
          </div>
        ) : (
          <form className="pago-form" onSubmit={handleSubmit}>
            <h2>Datos de Envío</h2>
            <label>Nombre completo</label>
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />

            <label>Dirección</label>
            <input type="text" name="direccion" value={form.direccion} onChange={handleChange} required />

            <label>Ciudad</label>
            <input type="text" name="ciudad" value={form.ciudad} onChange={handleChange} required />

            <label>Región</label>
            <input type="text" name="region" value={form.region} onChange={handleChange} required />

            <h2>Método de Pago</h2>
            <select name="metodo" value={form.metodo} onChange={handleChange}>
              <option value="tarjeta">Tarjeta de crédito/débito</option>
              <option value="transferencia">Transferencia bancaria</option>
              <option value="efectivo">Pago en efectivo</option>
            </select>

            <h3>Total a pagar: ${total.toLocaleString("es-CL")}</h3>

            <button type="submit" className="btn-principal">
              Confirmar Pago
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
