import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import AboutPage from "./components/AboutPage/AboutPage";
import ContactPage from "./components/ContactPage/ContactPage";
import Projects from "./components/Projects/Projects";

import "./App.css";
// app test
const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <Projects />
      <ContactPage />
    </div>
  );
};

export default App;
