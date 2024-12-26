// import { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./NavBar"
import Profile from './pages/ProfilePage/Profile';
import Discover from './pages/DiscoverPage/Discover';
import AboutUs from './pages/AboutUsPage/AboutUs';
import Home from './pages/HomePage/Home';
import "./NavBarStyles.css"
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
    <NavBar />
    <div className = "container">
      {/* style={{ backgroundColor: backgroundColor, color: textColor }}> */}
      {/* <button onClick={switchMode}>Dark mode</button>  */}
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/discover" element = {<Discover />} />
        <Route path = "/profile" element = {<Profile />} />
        <Route path = "/aboutus" element = {<AboutUs />} />
      </Routes>
    </div>
    </>
  )
}

export default App;
