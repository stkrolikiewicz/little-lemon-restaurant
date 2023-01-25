import React from "react";
import HeroSection from "./HeroSection";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";

const HomePage = ({ resBlocked }) => {
    return (
        <>
            <HeroSection resBlocked={resBlocked} />
            <Specials />
            <Testimonials />
            <About />
        </>
    );
};

export default HomePage;
