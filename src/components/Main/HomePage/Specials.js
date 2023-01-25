import React from "react";
import Card from "./Card";
import specials from "../../../data/specials.json";
import photo1 from "../../../assets/greek-salad.jpg";
import photo2 from "../../../assets/bruchetta.svg";
import photo3 from "../../../assets/lemon-dessert.jpg";

const Specials = () => {
    const photos = [photo1, photo2, photo3];
    return (
        <section id="specials-section">
            <div className="container">
                <div className="row1">
                    <h1>This week specials!</h1>
                    <button aria-label="On Click">Online Menu</button>
                </div>
                <div className="row2">
                    {specials.map((special, index) => (
                        <Card key={index} {...special} image={photos[index]} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Specials;
