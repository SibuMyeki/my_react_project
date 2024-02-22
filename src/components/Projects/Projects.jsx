import React from 'react';
import './Projects.css';
import Website_images from "./website.png";
import Metric_Convetor from "./Convetor.png";
import Financial_Calculator from "./Financial.jpg";
 
function Projects() {
  return (
    <div id='Projects' className="Projects">

                <p ><strong>Projects</strong></p> 
                <ul>
                    <li>
                        <img src={Website_images} alt='website image'/>
                        <figcaption>Website</figcaption>
                    </li>
                    <li>
                        <img src={Metric_Convetor} alt='website image'/>
                        <figcaption>Metric Convetor</figcaption>
                    </li>
                    <li>
                        <img src={Financial_Calculator} alt='website image'/>
                        <figcaption>Financial Calculator</figcaption>
                    </li>
                </ul>
    </div>
  );
};

export default Projects;         