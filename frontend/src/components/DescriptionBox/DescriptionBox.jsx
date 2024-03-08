import React from "react";
import "./descriptionbox.css";

const DescriptionBox = () => {
    return (
        <div className="descriptionbox">
            <div className="discripionbox-navigator">
                <div className="discriptionbox-nav-box">Description</div>
                <div className="discriptionbox-nav-box fade">Reviews(122)</div>
            </div>
            <div className="discriptionbox-description">
                <p>
                    In this example, the PasswordInput component uses the state variables
                    password and showPassword. The input type is determined dynamically
                    based on the value of showPassword. The button toggles the visibility
                    of the password by updating the showPassword state when clicked
                </p>
                <p>
                    To create an "eye" button that toggles the visibility of the password
                    in a React application, you can use state to track whether the
                    password should be visible or not. You can then conditionally render
                    the input type based on the state. Here's an example:
                </p>
            </div>
        </div>
    );
}

export default DescriptionBox;