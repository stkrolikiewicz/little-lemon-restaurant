import React from "react";

const Contact = () => {
    return (
        <>
            <h4>Contact</h4>
            <ul>
                <li>
                    tel: <a href="tel:555-555-5555">555-555-5555</a>
                </li>
                <li>
                    email:{" "}
                    <a href="mailto:contact@littlemon.com">
                        contact@littlemon.com
                    </a>
                </li>
                <li>address: 1234 Main St. New York, NY 10001</li>
            </ul>
        </>
    );
};

export default Contact;
