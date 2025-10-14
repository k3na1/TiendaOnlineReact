import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/style.css";

export default function Footer() {
  return (
    <footer
      className="text-center text-white py-3 mt-auto"
      style={{
        backgroundColor: "#3e2723",
        position: "relative",
        bottom: 0,
        width: "100%",
      }}
    >
      <div className="container">
        <small>
          &copy; {new Date().getFullYear()} CoffeeShop — Todos los derechos reservados.
        </small>
      </div>
    </footer>
  );
}
