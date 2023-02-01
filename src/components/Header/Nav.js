import React from "react";
import { Link } from "react-router-dom";
import hamburger from "../../assets/hamburger-menu.svg";
import logo from "../../assets/Logo.svg";
const Nav = () => {
    const toggleNav = () => {
        const nav = document.getElementById("nav-header");
        const header = document.querySelector("header");
        nav.classList.toggle("show");
        header.classList.toggle("show");
    };
    return (
        <nav className="screen">
            <img id="logo-header" src={logo} alt="logo" />
            <img
                role="button"
                onClick={toggleNav}
                id="hamburger-menu"
                src={hamburger}
                alt="hamburger menu"
            />
            <ul id="nav-header" className="screen">
                <li>
                    <Link to="/" aria-label="On Click">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="/about" aria-label="On Click">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="/menu" aria-label="On Click">
                        MENU
                    </Link>
                </li>
                <li>
                    {true ? (
                        <Link to="/booking" aria-label="On Click">
                            RESERVATIONS
                        </Link>
                    ) : (
                        <Link className="disabled" aria-label="On Click">
                            RESERVATIONS
                        </Link>
                    )}
                </li>
                <li>
                    <Link to="/order-online" aria-label="On Click">
                        ORDER ONLINE
                    </Link>
                </li>
                <li>
                    <Link to="/login" aria-label="On Click">
                        LOGIN
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
