import React from "react";
import "./AboutPage.css";
import image from "./img4.jpg";
import ProgressBar from './ProgressBar';
import ProgressCSS from './ProgressCSS';
import ProgressBarPython from './ProgressBarPython';
import Javascript from './Javascript';
import Java from './Java';

function AboutPage() {
  return (
    <div className="about-me">
      <div>
        <img className="AboutPicture" src={image} alt="About me picture" />
      </div>
      <div id="About" className="About-Text">
        <div>
          <p>
            <strong>About Me</strong>
          </p>
          <p>
            I am a Mechanical Engineering Graduate with 3 years of experience
            working as a Maintenance Technician at City of Cape Town in the
            Water & Sanitation Department. I am doing a complete career
            overhaul, adventuring in the "tech" world. Currently I am part of
            the ABSA 18-month Software Engineering Program . At the moment I am
            looking for opportunities learnerships, internships and programming
            junior roles to develop and sharpen my tech skills and explore new
            ones, more than anything I am looking for exposure and mentorship in
            Software development sector
          </p>
        </div>
      </div>
      <div id='Skills' className='ProgressBar-Position'>
        <h3>Skills</h3>
        <br />
        <div className='ProgressBar'>
          <ProgressBar />
        </div>

        <div className='ProgressBar'>
          <ProgressCSS />
        </div>

        <div className='ProgressBar'>
          <ProgressBarPython />
        </div>

        <div className='ProgressBar'>
          <Javascript />
        </div>

        <div className='ProgressBar'>
          <Java />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
