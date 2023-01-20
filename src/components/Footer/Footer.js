import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Socials from "./Socials";
import logo from "../../assets/Logo.svg";
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <Nav />
                <Contact />
                <Socials />
            </div>
            <div id="logo-footer" className="footer-item">
                <img src={logo} alt="logo" />
            </div>
            <p>© 2023</p>
        </footer>
    );
};

export default Footer;
