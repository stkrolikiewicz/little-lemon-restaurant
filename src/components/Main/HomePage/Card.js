import React from "react";
import orderIcon from "../../../assets/order.svg";

const Card = (props) => {
    return (
        <div className="card">
            {/* <div className="card-image">
                
            </div> */}
            <img src={props.image} alt={props.alt} />
            <div className="card-content">
                <div>
                    <div>
                        <h3>{props.title}</h3>
                        <h5 id="price">{props.price}</h5>
                    </div>
                    <h5>{props.description}</h5>
                </div>
                <button className="order-btn">
                    <h5>Order a delivery</h5>
                    <img src={orderIcon} alt="Order icon." />
                </button>
            </div>
        </div>
    );
};

export default Card;
