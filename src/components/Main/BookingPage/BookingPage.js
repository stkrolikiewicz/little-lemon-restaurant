import React from "react";
import BookingForm from "./BookingForm";
const BookingPage = (props) => {
    return (
        <section id="booking-section">
            <BookingForm availableTimes={props.dispatch} />
        </section>
    );
};

export default BookingPage;
