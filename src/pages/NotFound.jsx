import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="notfound">
        <div className="notfound__content">
            <h1>404</h1>
            <h2>Oops… este lugar no existe</h2>
            <p>
            Parece que te has perdido buscando un alojamiento que no está en el mapa.
            Pero no te preocupes, aún hay muchos lugares increíbles esperándote.
            </p>

            <Link to="/" className="notfound__button">
            Volver al inicio
            </Link>
        </div>
        </div>
    );
}

export default NotFound;
