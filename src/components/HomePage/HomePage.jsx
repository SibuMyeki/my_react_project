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
                <h1>Welcome to My Website!</h1>
                <p>This is the homepage content.</p>
            </div>
        </section>
    );
};

export default HomePage;