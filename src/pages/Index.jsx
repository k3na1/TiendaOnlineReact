// src/pages/Index.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/style.css";
import "../assets/styles/header.css"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Index() {
  const [index, setIndex] = useState(0);
  const slides = [
    "https://tse1.mm.bing.net/th/id/OIP.kEdR1PWJNfsgqM4RIQ9ebgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://cdn.mos.cms.futurecdn.net/UoHp9eWdb7kAgcmYDHxDN3-1920-80.jpg",
    "https://th.bing.com/th/id/R.f2acbd2f4f5650349cbb2dae08a2a1a4?rik=5h%2fd1emv%2btoaBw&pid=ImgRaw&r=0",
  ];

  // Simulación de productos destacados
  const productos = [
    {
      id: "SKU001",
      nombre: "Café de Grano Clásico",
      precio: 12000,
      imagen: "https://via.placeholder.com/300x300.png?text=Cafe+Clasico",
    },
    {
      id: "SKU002",
      nombre: "Café Etiopía",
      precio: 18000,
      imagen: "https://via.placeholder.com/300x300.png?text=Cafe+Etiopia",
    },
    {
      id: "SKU003",
      nombre: "Prensa Francesa",
      precio: 25000,
      imagen: "https://via.placeholder.com/300x300.png?text=Prensa+Francesa",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <> 
    <Navbar />
    <main>
      {/* Carrusel */}
      <section className="carrusel">
        <div className="carrusel-contenedor">
          <img src={slides[index]} alt={`Slide ${index + 1}`} />
        </div>
        <button onClick={() => setIndex((index - 1 + slides.length) % slides.length)} className="carrusel-btn prev">❮</button>
        <button onClick={() => setIndex((index + 1) % slides.length)} className="carrusel-btn next">❯</button>
      </section>

      {/* Bienvenida */}
      <h1>Bienvenido a CoffeeShop</h1>
      <p>Descubre nuestros productos y ofertas exclusivas.</p>

      {/* Productos destacados */}
      <section className="destacados">
        <h2>Productos destacados</h2>
        <div className="destacados-grid">
          {productos.map((p) => (
            <div className="producto-card" key={p.id}>
              <img src={p.imagen} alt={p.nombre} />
              <h3>{p.nombre}</h3>
              <p>${p.precio.toLocaleString("es-CL")}</p>
              <Link to={`/productos/${p.id}`} className="btn">Ver más</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
