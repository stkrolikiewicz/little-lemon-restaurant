import React, { useReducer, useState, useEffect } from "react";
import About from "./HomePage/About";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";
import ConfirmedBooking from "./BookingPage/ConfirmedBooking";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import { fetchAPI } from "../../api/api";

const Main = () => {
    const initializeTimes = () => {
        const today = new Date();
        let list = fetchAPI(today);
        return list;
    };

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "book": {
                const list = state.map((time) => {
                    if (time === action.time) {
                        return "booked";
                    } else {
                        return time;
                    }
                });
                return list.filter((time) => time !== "booked");
            }
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        initializeTimes()
    );

    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage resBlocked={!availableTimes.length} />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={availableTimes}
                            firstTime={availableTimes[0]}
                            dispatch={dispatch}
                        />
                    }
                />
                <Route
                    path="/booking/confirmation"
                    element={<ConfirmedBooking />}
                />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route pathe="/login" element={<LoginPage />} />
            </Routes>
        </main>
    );
};

export default Main;
