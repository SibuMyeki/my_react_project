// HomePage.js

import React from "react";
import './HomePage.css'; // Import the CSS file for styling
// Import the image
import image from "./img1.jpg"; 

const HomePage = () => {
    return (
        <section className="HomePage">
            <div className="Home-Img">
                <img className="HomePicture" src={image} alt="Home-Image" />
            </div>
            <div className="Home-Text">
                <div>
                    <h1>Sibu Myeki</h1>
                <p>
                    I&#39;m
                    <br/> a web developer in training with a passion for creating 
                    visually stunning and user-friendly websites.
                </p>
                <div className="text-wrapper-6">Download Resume</div>
                </div>
            </div>
                <div className="Resume">
                    <p>Download Resume</p>
            </div>
        </section>
    );
};

export default HomePage;