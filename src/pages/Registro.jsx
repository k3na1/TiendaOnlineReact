// src/pages/Registro.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUsuarios } from "../store/useUsuarios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/form.css";

export default function Registro() {
  const [form, setForm] = useState({
    run: "",
    nombre: "",
    apellidos: "",
    correo: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { usuarios, agregarUsuario } = useUsuarios();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usuarios.some((u) => u.run === form.run)) {
      setError("El RUN ya está registrado ❌");
      return;
    }

    agregarUsuario({ ...form, tipo: "Cliente" });
    alert("Registro exitoso ✅");
    navigate("/login");
  };

  return (
    <>
      <Navbar />
      <main className="form-page">
        <h1>Registro de Usuario</h1>
        <form onSubmit={handleSubmit}>
          <label>RUN:</label>
          <input name="run" value={form.run} onChange={handleChange} required />

          <label>Nombre:</label>
          <input
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <label>Apellidos:</label>
          <input
            name="apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
          />

          <label>Correo:</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />

          {error && <p className="error">{error}</p>}
          <button type="submit">Registrarse</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
