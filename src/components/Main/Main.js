import React from "react";
import About from "./HomePage/About";
import HomePage from "./HomePage/HomePage";
import BookingPage from "./BookingPage";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/order-online" element={<OrderOnline />} />
                <Route pathe="/login" element={<LoginPage />} />
            </Routes>
        </main>
    );
};

export default Main;
