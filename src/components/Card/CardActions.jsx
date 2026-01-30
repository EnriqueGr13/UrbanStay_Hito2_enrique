import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const CardActions = () => {
    const [favorito, setFavorito] = useState(false);

    const toggleFavorito = (e) => {
        e.stopPropagation();
        setFavorito(!favorito);
    };

    return (
        <button
        className={`card__fav ${favorito ? "active" : ""}`}
        onClick={toggleFavorito}
        aria-label="Marcar como favorito"
        >
        {favorito ? <FaHeart /> : <FaRegHeart />}
        </button>
    );
};

export default CardActions;
