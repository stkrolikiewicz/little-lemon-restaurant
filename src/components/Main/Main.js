import React, { useReducer, useState } from "react";
import About from "./HomePage/About";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    const initializeTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    };

    const updateTimes = () => {
        return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                    path="/booking"
                    element={<BookingPage availableTimes={dispatch} />}
                />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route pathe="/login" element={<LoginPage />} />
            </Routes>
        </main>
    );
};

export default Main;
