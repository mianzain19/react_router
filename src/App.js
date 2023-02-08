import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        <Route path="/contact" element={<ContactUs />}></Route>

        <Route path="/login" element={<Login />}></Route>

        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
