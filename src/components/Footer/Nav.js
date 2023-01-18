import React from "react";

const Nav = () => {
    return (
        <nav id="nav-footer" className="footer-item">
            <h4>Doormat Navigation</h4>
            <ul>
                <li>
                    <a href="#home">HOME</a>
                </li>
                <li>
                    <a href="#about">ABOUT</a>
                </li>
                <li>
                    <a href="#menu">MENU</a>
                </li>
                <li>
                    <a href="#reservations">RESERVATIONS</a>
                </li>
                <li>
                    <a href="#order-online">ORDER ONLINE</a>
                </li>
                <li>
                    <a href="#login">LOGIN</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
