import React from 'react'
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
// app test
const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <HomePage />
      <AboutPage />

      
      
    </div>
  );
}

export default App;

