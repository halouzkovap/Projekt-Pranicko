import React from 'react';
import { render } from 'react-dom';
import {Link} from 'react-router-dom';

const Navbar =()=>{

    return(
        <nav className="menu">
        <Link className="menu__link menu__link--active" to="/">Úvod</Link>
        <Link className="menu__link" to="/create">Vytvořit přáníčko</Link>
        <Link className="menu__link" to="/pick">Vyzvednout</Link>
       </nav>
    )
}
export default Navbar;