import React from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger-menu.svg";
import logo from "../../assets/Logo.svg";
const Nav = () => {
    return (
        <nav className="screen">
            <img id="logo-header" src={logo} alt="logo" />
            <img id="hamburger-menu" src={hamburger} alt="hamburger menu" />
            <ul id="nav-header" className="screen">
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
