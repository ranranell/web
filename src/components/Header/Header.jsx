import './Header.css';
import { Link, NavLink } from 'react-router-dom';

export function Header() {
    return (
        <header>
            <div className="container">
                <div className="header__inner">
                    <Link to="/" className="header__logo">SNEAKERS</Link>
                    <nav className="header__nav nav">
                        <NavLink to="/" className="nav__link">Главная</NavLink>
                        <NavLink to="/catalog" className="nav__link">Каталог</NavLink>
                        <NavLink to="/about" className="nav__link">О нас</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
}