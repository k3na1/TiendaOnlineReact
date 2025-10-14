// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/form.css";


export default function Login() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = login(correo, password);
    if (!res.success) {
      setError(res.message);
      return;
    }

    alert(`Bienvenido ${res.user.nombre} (${res.user.tipo}) 👋`);

    if (res.user.tipo === "Administrador") navigate("/panel");
    else if (res.user.tipo === "Vendedor") navigate("/productos");
    else navigate("/");
  };

  return (
    <>
      <Navbar />
      <main className="form-page">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
