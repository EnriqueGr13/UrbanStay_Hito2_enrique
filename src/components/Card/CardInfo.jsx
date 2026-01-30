import { Link } from "react-router-dom";

const CardInfo = ({id, nombre, descripcion, precio }) => {
    return (
        <div className="card__content">

        <Link to={`/producto/${id}`}>
            <h3>{nombre}</h3>
        </Link>
        <p className="card__description">{descripcion}</p>
        <span className="card__price">{precio}€ / noche</span>
        </div>
    );
};

export default CardInfo;
