import React from 'react'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import ProgressBar from './components/AboutPage/ProgressBar';
import ProgressCSS from './components/AboutPage/ProgressCSS';
import ProgressBarPython from './components/AboutPage/ProgressBarPython';
import Javascript from './components/AboutPage/Javascript';
import Java from './components/AboutPage/Java';
import ContactPage from './components/ContactPage/ContactPage';
import Projects from './components/Projects/Projects';

import './App.css';
 // app test
const App = () => {
  return (
       
    <div>
        <Navbar/>
        <HomePage />
        <AboutPage />
        <Projects />

        
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
        <ContactPage />
    
    </div>

        
      
  );
}

export default App;

