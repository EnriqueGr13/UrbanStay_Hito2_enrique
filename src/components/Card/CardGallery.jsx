import { useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const CardGallery = ({ imagenes = [], children, isDetail = false }) => {
    const [indiceActual, setIndiceActual] = useState(0);

    if (!imagenes.length) return null;

    const siguienteImagen = (e) => {
        e.stopPropagation();
        setIndiceActual((prev) =>
            prev === imagenes.length - 1 ? 0 : prev + 1
        );
    };

    const imagenAnterior = (e) => {
        e.stopPropagation();
        setIndiceActual((prev) =>
            prev === 0 ? imagenes.length - 1 : prev - 1
        );
    };

    return (
        <div className={`card__image ${isDetail ? "card__image--detail" : ""}`}>
            <img
                src={imagenes[indiceActual]}
                alt="Imagen del alojamiento"
            />

            <button className="card__arrow left" onClick={imagenAnterior}>
                <IoIosArrowDropleft />
            </button>

            <button className="card__arrow right" onClick={siguienteImagen}>
                <IoIosArrowDropright />
            </button>

            {!isDetail && children}
        </div>
    );
};

export default CardGallery;
