import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import "./App.css";
import NavBar from "./Pages/NavBar";
const Router = () => {
  return (
    <div className="App router">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Router;
