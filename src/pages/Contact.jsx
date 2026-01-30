import "./Contact.css";

function Contact() {
    return (
        <div className="contact">
        <div className="contact__container">
            <h1>Contacto</h1>
            <p className="contact__intro">
            ¿Tienes alguna duda sobre un alojamiento o necesitas ayuda con tu reserva?
            Escríbenos y te responderemos lo antes posible.
            </p>

            <form className="contact__form">
            <div className="form__group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" placeholder="Tu nombre" required />
            </div>

            <div className="form__group">
                <label htmlFor="email">Correo electrónico</label>
                <input type="email" id="email" placeholder="tu@email.com" required />
            </div>

            <div className="form__group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                id="message"
                rows="5"
                placeholder="Escribe aquí tu consulta..."
                required
                ></textarea>
            </div>

            <button type="submit" className="contact__button">
                Enviar mensaje
            </button>
            </form>
        </div>
        </div>
    );
}

export default Contact;
