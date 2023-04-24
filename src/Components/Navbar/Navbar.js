import './Navbar.scss'
import logo from './GordoVeggieLogo.svg'
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navbar = () => {
const { user, logout } = useContext(LoginContext)

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

                <CartWidget />
            </div>
            <div className="login-state">
                <h6>Bienvenido {user.email}</h6>
                <button className='btn btn-danger' onClick={logout}>Logout</button>
            </div>
        </header>
    )
}
