import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Index() {
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

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-fill">
        {/* 🖼️ Carrusel */}
        <div id="carruselPrincipal" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.kEdR1PWJNfsgqM4RIQ9ebgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
                className="d-block w-100 rounded"
                alt="Slide 1"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://cdn.mos.cms.futurecdn.net/UoHp9eWdb7kAgcmYDHxDN3-1920-80.jpg"
                className="d-block w-100 rounded"
                alt="Slide 2"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://th.bing.com/th/id/R.f2acbd2f4f5650349cbb2dae08a2a1a4?rik=5h%2fd1emv%2btoaBw&pid=ImgRaw&r=0"
                className="d-block w-100 rounded"
                alt="Slide 3"
                style={{ height: "450px", objectFit: "cover" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carruselPrincipal"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carruselPrincipal"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        {/* 🏠 Bienvenida */}
        <section className="text-center my-5">
          <h1 className="fw-bold text-dark">Bienvenido a CoffeeShop</h1>
          <p className="text-muted fs-5">
            Descubre nuestros productos y ofertas exclusivas.
          </p>
        </section>

        {/* ☕ Productos destacados */}
        <section className="container mb-5">
          <h2 className="text-center text-dark mb-4 fw-semibold">
            Productos destacados
          </h2>
          <div className="row justify-content-center g-4">
            {productos.map((p) => (
              <div className="col-md-4 col-sm-6" key={p.id}>
                <div className="card border-0 shadow-sm h-100">
                  <img
                    src={p.imagen}
                    className="card-img-top"
                    alt={p.nombre}
                    style={{ objectFit: "cover", height: "250px" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{p.nombre}</h5>
                    <p className="text-muted mb-2">
                      ${p.precio.toLocaleString("es-CL")}
                    </p>
                    <Link
                      to={`/productos/${p.id}`}
                      className="btn fw-bold"
                      style={{ backgroundColor: "#f0a500", color: "#3e2723" }}
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
