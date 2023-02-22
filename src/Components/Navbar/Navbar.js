import './Navbar.css'



export const Navbar = () => {

    return (
        <header className="header">
            <div className="header__container">
                <h1 className="header__logo">LOGO</h1>

                <nav className="navbar">
                    <a href="#" className="navbar__link">Enlace 1</a>
                    <a href="#" className="navbar__link">Enlace 2</a>
                    <a href="#" className="navbar__link">Enlace 3</a>
                </nav>
            </div>
        </header>
    )
}
