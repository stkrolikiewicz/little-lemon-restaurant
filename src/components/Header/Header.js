import React from "react";
import Nav from "./Nav";
import logo from "../../assets/Logo.svg";

const Header = () => {
    return (
        <header>
            <img id="logo-header" src={logo} alt="logo" />
            <Nav />
        </header>
    );
};

export default Header;
