import React from "react";
import Testimonial from "./Testimonial";
import Mike from "../../../assets/Mike.jpg";
import Matt from "../../../assets/Matt.jpg";
import Sophie from "../../../assets/Sophie.jpg";
import Irene from "../../../assets/Irene.jpg";
import testimonials from "../../../data/testimonials.json";

const Testimonials = () => {
    const photos = [Mike, Sophie, Irene, Matt];
    return (
        <section id="testimonials-section">
            <div className="container">
                <h2>Testimonials</h2>
                <div className="testimonials">
                    {testimonials.map((testimonial, index) => (
                        <Testimonial
                            key={index}
                            {...testimonial}
                            photo={photos[index]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
