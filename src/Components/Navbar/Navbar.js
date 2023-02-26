import './Navbar.scss'
import logo from './GordoVeggieLogo.svg'
import CartWidget from '../CartWidget/CartWidget'


export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <img src={logo} alt="logo" className='header__logo' />
                <nav className="navbar">
                    <a href="#" className="navbar__link">Enlace 1</a>
                    <a href="#" className="navbar__link">Enlace 2</a>
                    <a href="#" className="navbar__link">Enlace 3</a>
                </nav>

                {<CartWidget />}

            </div>
        </header>
    )
}
