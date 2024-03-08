import React from "react";
import "./newsletter.css";

const NewsLetter = () => {
    return (
        <div className="newsletter">
            <h1>Get exclusive offers on your Email</h1>
            <p>subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="your email id" />
                <button>subscribes</button>
            </div>
        </div>
    );
}

export default NewsLetter;