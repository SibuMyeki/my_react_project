import React from 'react';
import './AboutPage.css';
import image from "./img4.jpg";

function AboutPage() {
  return (
    <div className="about-me">
        <div className="Home-Img">
                <img className="AboutPicture" src={image} alt="about-Image" />
            </div>
          
      <h2>About Me</h2>
      <p>
        I am a Mechanical Engineering Graduate with 3 years of experience working as a Maintenance Technician at City of Cape Town in the Water & Sanitation Department. 
        I am doing a complete career overhaul, adventuring in the "tech" world. 
        Currently I am part of the ABSA 18-month Software Engineering Program . At the moment I am looking for opportunities 
        (learnerships, internships and programming junior roles) to develop and sharpen my tech skills and explore new ones,
        more than anything I am looking for exposure and mentorship in Software development sector
      </p>
      
    </div>
  );
}

export default AboutPage;