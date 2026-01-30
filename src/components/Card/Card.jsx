import "./Card.css";
import CardGallery from "./CardGallery";
import CardInfo from "./CardInfo";
import CardActions from "./CardActions";

const Card = ({id, nombre, precio, imagenes, descripcion, viewMode }) => {
    return (
        <article className={`card ${viewMode}`}>
            <CardGallery imagenes={imagenes}>
                <CardActions />
            </CardGallery>

            <CardInfo
                id={id}
                nombre={nombre}
                descripcion={descripcion}
                precio={precio}
            />
            
        </article>
    );
};

export default Card;
