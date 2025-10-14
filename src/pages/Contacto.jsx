import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/style.css";
import "../assets/styles/header.css";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simula el envío del mensaje
    setEnviado(true);
    setFormData({ nombre: "", correo: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 4000); // Oculta el mensaje después de 4s
  };

  return (
    <>
      <Navbar />

      <main className="contacto-page">
        <h1>Contáctanos</h1>
        <p>
          Si tienes alguna duda o consulta, completa este formulario y te
          responderemos pronto.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="5"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit">Enviar</button>
        </form>

        {enviado && (
          <p style={{ color: "green", marginTop: "1rem" }}>
            ✅ Tu mensaje fue enviado correctamente (simulación).
          </p>
        )}
      </main>

      <Footer />
    </>
  );
}
