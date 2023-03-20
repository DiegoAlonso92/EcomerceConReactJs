import './Navbar.scss'
import logo from './GordoVeggieLogo.svg'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <Link to="/">
                <img src={logo} alt="logo" className='header__logo' />
                </Link>
                
                <nav className="navbar">
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/productos/suplementos" className="navbar__link">suplementos</Link>
                    <Link to="/productos/harinas" className="navbar__link">Harinas</Link>
                    <Link to="/productos/congelados" className="navbar__link">Congelados</Link>
                    <Link to="/nosotros" className="navbar__link">Nosotros</Link> 
                    <Link to="/contacto" className="navbar__link">Contacto</Link>
                </nav>

                {<CartWidget />}

            </div>
        </header>
    )
}
