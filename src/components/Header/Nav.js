import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="nav-header">
            <ul>
                <li>
                    <Link to="/">HOME</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
                <li>
                    <Link to="/menu">MENU</Link>
                </li>
                <li>
                    <Link to="/booking">RESERVATIONS</Link>
                </li>
                <li>
                    <Link to="/order-online">ORDER ONLINE</Link>
                </li>
                <li>
                    <Link to="/login">LOGIN</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
