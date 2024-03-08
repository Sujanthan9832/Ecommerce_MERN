import React, { useEffect, useState } from "react";
import "./hero.css";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

const images = [slider1, slider2, slider3, slider4];

const Hero = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <div className="hero">
            <div className="slider-container">
                <button className="nav-button prev" onClick={prevSlide}>
                    <MdArrowBackIosNew />
                </button>
                <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                </div>
                <button className="nav-button next" onClick={nextSlide}>
                    <MdArrowForwardIos />
                </button>
            </div>
        </div>
    );
}

export default Hero;