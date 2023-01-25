import React from "react";
import photo from "../../../assets/restauranfood.jpg";
import { Link } from "react-router-dom";

const HeroSection = ({ resBlocked }) => {
    return (
        <section id="hero-section">
            <div className="container">
                <div className="content">
                    <div className="text">
                        <div className="titles">
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                        </p>
                    </div>
                    <Link to="/booking">
                        <button
                            disabled={resBlocked}
                            aria-disabled={resBlocked}
                            aria-label="On Click"
                        >
                            Reserve a table
                        </button>
                    </Link>
                </div>
                <img src={photo} alt="Restaurant food." />
            </div>
        </section>
    );
};

export default HeroSection;
