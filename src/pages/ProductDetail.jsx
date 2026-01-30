import { useParams, Link } from "react-router-dom";
import items from "../data/items.js";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import Card from "../components/Card/Card.jsx";
import "./ProductDetail.css";
import CardGallery from "../components/Card/CardGallery.jsx";


function ProductDetail() {
    const { id } = useParams();
    const producto = items.find((item) => item.id === Number(id));

    // 🔴 SI NO EXISTE → mensaje de error
    if (!producto) {
        return (
            <div className="detail detail--error">
                <h2>Este alojamiento no existe 😢</h2>
                <p>Puede que haya sido eliminado o la URL sea incorrecta.</p>
                <Link to="/" className="detail__back">
                    Volver al inicio
                </Link>
            </div>
        );
    }

    // 🟢 PRODUCTOS RELACIONADOS (excluimos el actual)
    const relacionados = items
        .filter((item) => item.id !== producto.id)
        .slice(0, 3);

    return (
        <>
            {/* Breadcrumbs FUERA del grid */}
            <Breadcrumbs nombre={producto.nombre} />

            {/* Layout principal */}
            <div className="detail">
                <CardGallery imagenes={producto.imagenes} isDetail />

                <div className="detail__info">
                    <h1>{producto.nombre}</h1>
                    <p className="detail__price">{producto.precio}€ / noche</p>
                    <p className="detail__description">{producto.descripcion}</p>

                    <h3>Equipamiento</h3>
                    <ul>
                        <li>WiFi</li>
                        <li>Cocina equipada</li>
                        <li>Aire acondicionado</li>
                        <li>Check-in autónomo</li>
                    </ul>
                </div>
            </div>

            {/* Alojamientos similares */}
            <section className="related">
                <h2>Alojamientos similares</h2>

                <div className="related__grid">
                    {relacionados.map((item) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            nombre={item.nombre}
                            precio={item.precio}
                            imagenes={item.imagenes}
                            descripcion={item.descripcion}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}

export default ProductDetail;
