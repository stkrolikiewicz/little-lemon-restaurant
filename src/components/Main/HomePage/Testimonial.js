import React from "react";
import star from "../../../assets/star.svg";
const Testimonial = (props) => {
    return (
        <div className="testimonial">
            <div className="rating">
                <h6>Rating: {props.rate}/5</h6>
                <img src={star} />
            </div>
            <div className="testimonial-photo">
                <img
                    src={props.photo}
                    alt={props.name}
                    height="60px"
                    width="60px"
                />
                <h3>{props.name}</h3>
            </div>
            <h6>{props.review}</h6>
        </div>
    );
};

export default Testimonial;
