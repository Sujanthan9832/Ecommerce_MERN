import React from "react";
import "./offers.css";
import { FaArrowRightLong } from "react-icons/fa6";
import exclusive_image from "../assets/picture12.png";

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive Offers</h1>
                <h1>Only for you</h1>
                <p>only one best seller product</p>

                <div className="offers-btn">
                    <p>check now</p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className="offers-left">
                <img src={exclusive_image} alt="" className="offers-img" />
            </div>
        </div>
    );
}

export default Offers;