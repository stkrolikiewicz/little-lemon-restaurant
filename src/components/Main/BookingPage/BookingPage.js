import React, { useEffect } from "react";
import BookingForm from "./BookingForm";
const BookingPage = (props) => {
    return (
        <section id="booking-section">
            <BookingForm
                availableTimes={props.availableTimes}
                dispatch={props.dispatch}
            />
        </section>
    );
};

export default BookingPage;
