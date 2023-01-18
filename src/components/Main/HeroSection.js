import React from "react";
import photo from "../../assets/restauranfood.jpg";

const HeroSection = () => {
    return (
        <section id="hero-section">
            <div className="content">
                <div id="titles">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                </p>
                <button>Reserve a table</button>
            </div>
            <img src={photo} alt="Restaurant food." />
        </section>
    );
};

export default HeroSection;
