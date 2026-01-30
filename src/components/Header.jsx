import "./Header.css";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="header__container">

				{/* Logo */}
				<div className="header__logo">
					<Link to="/">
						<img src={logo} alt="UrbanStay logo" />
					</Link>
					<span>UrbanStay</span>
				</div>

				{/* Menú */}
				<nav className="header__nav">
					<ul>
						<li>
							<NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/favoritos" className={({ isActive }) => isActive ? "active" : ""}>
								Favoritos
							</NavLink>
						</li>
						<li>
							<NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
								Contacto
							</NavLink>
						</li>
						<li>
							<NavLink to="/perfil" className={({ isActive }) => isActive ? "active" : ""}>
								Perfil
							</NavLink>
						</li>
					</ul>
				</nav>

			</div>
		</header>
	);
};

export default Header;
