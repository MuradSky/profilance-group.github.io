import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) =>{    
    return(
        <header className="header">
            <nav className="nav">
                <Link to="/" className="nav__link">Главная</Link>
                <Link to="/news" className="nav__link">Новости</Link>
            </nav>
            <button
                type="button"
                class="btn btn-outline-info"
                onClick={props.onClick}
            >{props.text}</button>
        </header>
    )
}

export default Header;