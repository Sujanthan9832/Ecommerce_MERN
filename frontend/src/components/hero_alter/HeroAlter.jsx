//import React, { useEffect, useState } from "react";
import "./hero.css";
import { LiaHandPointUp } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";
import hero_image from "../assets/hero_image.png";
/*import men from "../assets/men1.jpeg";
import women from "../assets/women1.jpeg";
import kid from "../assets/kid1.jpeg";

const images = [men, women, kid];*/

const Hero = () => {

    /* const [currentIndex, setCurrentIndex] = useState(0);
 
     const nextSlide = () => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
     }
 
     const prevSlide = () => {
         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
     }
 
     useEffect(() => {
         const interval = setInterval(() => {
             nextSlide();
         }, 2000);
 
         return () => {
             clearInterval(interval);
         };
     }, [currentIndex]);*/

    return (
        <div className="hero">
            {/*<div className="slider-container">
                <button className="nav-button prev" onClick={prevSlide}>
                    Previous
                </button>
                <div className="slide" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
                </div>
                <button className="nav-button next" onClick={nextSlide}>
                    Next
                </button>
            </div>*/}
            <div className="hero-left">
                <h2>New Arrivals</h2>
                <div>
                    <div className="hand-icon">
                        <p>New</p>
                        <LiaHandPointUp className="hand" />
                    </div>
                    <p>Collection</p>
                    <p>for Everyone!..</p>
                </div>
                <div className="latest-btn">
                    <p>Leatest Collection</p>
                    <FaArrowRightLong />
                </div>
            </div>
            <div className="hero-left">
                <img src={hero_image} alt="" className="hero-img" />
            </div>
        </div>
    );
}

export default Hero;