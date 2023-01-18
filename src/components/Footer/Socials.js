import React from "react";

const Socials = () => {
    return (
        <div id="socials" className="footer-item">
            <h4>Social Media</h4>
            <ul>
                <li>
                    <a href="https://www.facebook.com/">
                        <i className="fab fa-facebook-f">Facebook</i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <i className="fab fa-instagram">Instagram</i>
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com/">
                        <i className="fab fa-twitter">Twitter</i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in">LinkedIn</i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;
