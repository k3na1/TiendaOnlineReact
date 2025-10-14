import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/blogs.css";
import "../assets/styles/style.css";
import "../assets/styles/header.css";

export default function Blogs() {
  const [blogActivo, setBlogActivo] = useState(null);

  const blogs = [
    {
      id: 1,
      titulo: "Guía para Principiantes: Cómo Elegir tu Café Ideal",
      fecha: "10 de Septiembre, 2025",
      imagen: "https://via.placeholder.com/800x400.png?text=Granos+de+Cafe",
      resumen:
        "¿Te sientes perdido entre tantos orígenes, tuestes y perfiles de sabor? Te ayudamos a encontrar el grano perfecto para ti.",
      contenido: (
        <>
          <p>
            Entrar en el mundo del café de especialidad puede ser abrumador. Con términos como
            "origen único", "tueste claro" o "notas afrutadas", es fácil perderse. Pero no te
            preocupes, estamos aquí para guiarte. La clave para encontrar tu café ideal es entender
            tres conceptos básicos: <strong>origen</strong>, <strong>tueste</strong> y{" "}
            <strong>método de preparación</strong>.
          </p>
          <p>
            <strong>El Origen:</strong> Los granos de Etiopía suelen ser florales y cítricos,
            mientras que los de Brasil son más achocolatados y con cuerpo. Experimentar con cafés
            de diferentes países es el primer paso para descubrir tus preferencias.
          </p>
          <p>
            <strong>El Tueste:</strong> Un tueste claro preserva los sabores originales del grano,
            resultando en mayor acidez y notas más complejas. Un tueste oscuro desarrolla sabores
            más amargos y achocolatados. Si te gustan los sabores intensos, prueba un tueste oscuro;
            si prefieres algo más delicado, elige un tueste claro.
          </p>
        </>
      ),
    },
    {
      id: 2,
      titulo: "El Arte del Latte: Secretos para una Espuma Perfecta",
      fecha: "05 de Septiembre, 2025",
      imagen: "https://via.placeholder.com/800x400.png?text=Arte+Latte",
      resumen:
        "Conviértete en un barista en casa. Te enseñamos las técnicas y secretos para lograr una espuma de leche cremosa y sedosa.",
      contenido: (
        <>
          <p>
            Un buen latte es una obra de arte, y el lienzo es una espuma de leche perfectamente
            texturizada. Lograr esa microespuma sedosa en casa puede parecer un desafío, pero con la
            técnica correcta, es más fácil de lo que crees.
          </p>
          <p>
            <strong>La Leche es Clave:</strong> Utiliza siempre leche entera y muy fría. El
            contenido de grasa y proteína es fundamental para crear una espuma estable y con brillo.
            La baja temperatura inicial te da más tiempo para texturizarla antes de que se caliente
            demasiado.
          </p>
          <p>
            <strong>La Técnica:</strong> Hay dos fases. Primero, la “aireación”, donde introduces la
            punta de la lanceta de vapor justo debajo de la superficie de la leche para inyectar
            aire. Luego la “emulsión”, donde creas un remolino que integra el aire y rompe las
            burbujas grandes. ¡Nunca dejes que la leche hierva! El punto ideal es alrededor de 65°C.
          </p>
        </>
      ),
    },
  ];

  const volverAlListado = () => setBlogActivo(null);

  return (
    <>
      <Navbar />
      <main className="blog-container">
        {!blogActivo ? (
          <>
            <h1>Nuestro Blog del Café</h1>
            <p>
              Descubre secretos, guías y noticias del fascinante mundo del café de especialidad.
            </p>

            <div className="blog-grid">
              {blogs.map((blog) => (
                <div key={blog.id} className="blog-card">
                  <img src={blog.imagen} alt={blog.titulo} className="blog-card-img" />
                  <div className="blog-card-content">
                    <h3>{blog.titulo}</h3>
                    <p>{blog.resumen}</p>
                    <button className="btn-leermas" onClick={() => setBlogActivo(blog)}>
                      Leer más
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <article className="blog-post">
            <img src={blogActivo.imagen} alt={blogActivo.titulo} className="blog-post-img" />
            <h1>{blogActivo.titulo}</h1>
            <div className="blog-post-meta">
              Publicado el {blogActivo.fecha} por el Equipo CoffeeShop
            </div>
            <div className="blog-post-content">{blogActivo.contenido}</div>
            <button className="back-link" onClick={volverAlListado}>
              &larr; Volver al Blog
            </button>
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}
