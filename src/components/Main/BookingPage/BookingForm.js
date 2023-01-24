import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = (props) => {
    const navigate = useNavigate();
    const availableTimes = props.availableTimes.filter(
        (time) => time.available === true
    );

    const [date, setDate] = useState("");
    const [time, setTime] = useState(availableTimes[0].time);
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const booking = {
            date,
            time,
            guests,
            occasion,
        };
        props.dispatch({ type: "book", time: time });
        console.log(props.availableTimes);
        navigate("/");
    };

    return (
        <form id="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                }}
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time "
                value={time}
                onChange={(e) => {
                    setTime(e.target.value);
                }}
            >
                {availableTimes.map((time) => {
                    return (
                        <option key={time.id} value={time.time}>
                            {time.time}
                        </option>
                    );
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={guests}
                onChange={(e) => {
                    setGuests(e.target.value);
                }}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                onChange={(e) => {
                    setOccasion(e.target.value);
                }}
                value={occasion}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input
                type="submit"
                className="btn form-btn"
                value="Make Your reservation"
            />
        </form>
    );
};

export default BookingForm;
