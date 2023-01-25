import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConfirmedBooking = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 5000);
    }, [navigate]);

    const [counter, setCounter] = React.useState(5);
    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <section id="confirmation-section">
            <div id="confirmation" className="container">
                <h2>The booking has been confirmed!</h2>
                <p>
                    You will be redirected to the home page in <b>{counter}s</b>{" "}
                    .
                </p>
            </div>
        </section>
    );
};

export default ConfirmedBooking;
