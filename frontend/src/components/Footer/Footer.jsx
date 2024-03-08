import React from "react";
import './footer.css';
import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <p className="name">Pabs Fashion</p>
                <p className="slogan-line">look good feel well</p>
            </div>
            <ul className="footer-link">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="social-icons">
                <FaFacebookSquare className="fbicon" />
                <FaInstagramSquare className="instaicon" />
                <FaWhatsappSquare className="waicon" />
            </div>
            <div className="copyright">
                <hr />
                <p>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;