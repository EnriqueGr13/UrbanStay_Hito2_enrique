import { Link, useLocation, useParams } from "react-router-dom";
import items from "../data/items";
import "./Breadcrumbs.css";

function Breadcrumbs() {
    const location = useLocation();
    const { id } = useParams();

    const producto = id ? items.find((item) => item.id === Number(id)) : null;

    return (
        <nav className="breadcrumbs">
        <Link to="/">Inicio</Link>

        {producto && (
            <>
            <span className="breadcrumbs__separator"> {'>'} </span>
            <span className="breadcrumbs__current">{producto.nombre}</span>
            </>
        )}
        </nav>
    );
}

export default Breadcrumbs;
