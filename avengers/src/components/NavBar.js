import React from "react";
import { Link, link } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
    return (
        <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/avengers">Avengers</Link></li>

        </ul>
    )
}

export default NavBar;