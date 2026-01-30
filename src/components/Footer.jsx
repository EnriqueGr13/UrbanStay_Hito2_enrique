import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer__container">
            {/* Información básica */}
            <div className="footer__info">
            <h3>UrbanStay</h3>
            <p>
                Plataforma de reservas de alojamientos urbanos y rurales.
            </p>
            </div>

            {/* Enlaces legales / informativos */}
            <nav className="footer__nav">
            <ul>
                <li><a href="#">Aviso legal</a></li>
                <li><a href="#">Política de privacidad</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            </nav>
        </div>

        {/* Copyright */}
        <div className="footer__bottom">
            <p>© 2026 UrbanStay · Proyecto de Enrique</p>
        </div>
        </footer>
    );
};

export default Footer;
