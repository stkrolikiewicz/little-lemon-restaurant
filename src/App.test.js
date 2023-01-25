import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Main } from "./components";
import BookingForm from "./components/Main/BookingPage/BookingForm";

test("Renders the Booking form heading", () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    const headingElement = screen.getByText("Make Your reservation");
    expect(headingElement).toBeInTheDocument();
});

test("Validation of initializeTimes function returned values", () => {
    render(
        <BrowserRouter>
            <BookingForm />
        </BrowserRouter>
    );
    expect(screen.getByTestId("res-time")).toBeInTheDocument();
});
