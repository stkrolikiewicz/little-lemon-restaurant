import React from "react";
import Nav from "./Nav";
import Contact from "./Contact";
import Socials from "./Socials";
const Footer = () => {
    return (
        <footer>
            <div id="logo-footer" className="footer-item">
                <h4>Little Lemon Logo</h4>
            </div>
            <Nav />
            <Contact />
            <Socials />
            <p>© 2023</p>
        </footer>
    );
};

export default Footer;
