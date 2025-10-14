import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/style.css";
import "../assets/styles/header.css";
import "../assets/styles/nosotros.css";

export default function Nosotros() {
  return (
    <>
      <Navbar />

      <main>
        <section className="about-section">
          <h1>Nuestra Historia</h1>
          <p>
            CoffeeShop nació en 2024 de un sueño compartido entre un grupo de
            amigos apasionados por el café de especialidad. Lo que comenzó como
            un pequeño puesto en un mercado local, con granos tostados
            artesanalmente cada mañana, rápidamente se convirtió en un refugio
            para los amantes del buen café en la ciudad.
          </p>
          <p>
            Creemos que cada taza de café cuenta una historia: la del agricultor
            que cultivó el grano, la del tostador que reveló su potencial y la
            tuya, al disfrutarlo. Por eso, nos dedicamos a ofrecer una
            experiencia única, desde la selección de los mejores granos de
            origen hasta el último sorbo.
          </p>

          <h2>Misión y Visión</h2>
          <p>
            <strong>Nuestra Misión:</strong> Servir café excepcional de manera
            sostenible y crear un espacio acogedor donde nuestra comunidad pueda
            conectar y compartir.
          </p>
          <p>
            <strong>Nuestra Visión:</strong> Ser reconocidos como el corazón de
            la cultura del café en la región, inspirando momentos memorables una
            taza a la vez.
          </p>

          <h2>Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Foto de Benjamín"
              />
              <h3>Benjamin Martinez</h3>
              <span>Maestro Tostador y Fundador</span>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Foto de Francisco"
              />
              <h3>Francisco Aranguiz</h3>
              <span>Barista Principal y Co-Fundador</span>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/150"
                alt="Foto de Diego"
              />
              <h3>Diego Benitez</h3>
              <span>Encargado de Experiencia</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
