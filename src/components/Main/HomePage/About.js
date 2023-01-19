import React from "react";
import photo1 from "../../../assets/chefs.jpg";
import photo2 from "../../../assets/onechef.jpg";

const About = () => {
    return (
        <section id="about-section">
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
                            ex ea commodo consequat. Duis aute irure dolor in
                            repre henderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div className="images">
                    <img id="img1" src={photo2} alt="Mario and Adrian" />
                    <img id="img2" src={photo1} alt="Mario" />
                </div>
            </div>
        </section>
    );
};

export default About;
