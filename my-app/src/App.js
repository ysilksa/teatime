import './App.css';
import NavBar from "./NavBar"
import "./NavBarStyles.css"
import Profile from './pages/Profile';
import Discover from './pages/Discover';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar />
    <div className = "container"> 
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
