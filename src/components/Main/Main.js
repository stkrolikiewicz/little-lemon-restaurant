import React, { useReducer, useState, useEffect } from "react";
import About from "./HomePage/About";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage/BookingPage";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    const initializeTimes = [
        {
            id: 1,
            time: "17:00",
            available: true,
        },
        {
            id: 2,
            time: "18:00",
            available: true,
        },
        {
            id: 3,
            time: "19:00",
            available: true,
        },
        {
            id: 4,
            time: "20:00",
            available: true,
        },
        {
            id: 5,
            time: "21:00",
            available: true,
        },
        {
            id: 6,
            time: "22:00",
            available: true,
        },
    ];

    const updateTimes = (state, action) => {
        switch (action.type) {
            case "book":
                return state.map((time) => {
                    if (time.time === action.time) {
                        return {
                            ...time,
                            available: false,
                        };
                    } else {
                        return time;
                    }
                });
            case "cancel":
                return state.map((time) => {
                    if (time.id === action.id) {
                        return {
                            ...time,
                            available: true,
                        };
                    } else {
                        return time;
                    }
                });
            default:
                return state;
        }
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

    useEffect(() => {
        console.log(availableTimes);
    }, [availableTimes]);

    const times = availableTimes.filter((time) => time.available === true);

    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route
                    path="/booking"
                    element={
                        <BookingPage
                            availableTimes={times}
                            firstTime={times[0].time}
                            dispatch={dispatch}
                        />
                    }
                />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route pathe="/login" element={<LoginPage />} />
            </Routes>
        </main>
    );
};

export default Main;
