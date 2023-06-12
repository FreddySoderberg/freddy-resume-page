import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { NavbarComponent } from "./components/NavbarComponent";
import About from "./containers/AboutContainer";
import Resume from "./containers/ResumeContainer";
import HomeContainer from "./containers/_HomeContainer";

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/About" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </>
  );
};

export default App;
