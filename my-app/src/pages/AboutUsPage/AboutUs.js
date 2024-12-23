import React from 'react';
import { useState, useEffect } from 'react';
import '../../App.css';
import './AboutUs.css';

// functions for app elements 
import ThemeSwitcher from '../../components/ThemeSwitcher.js';
import ImageCarousel from './Carousel.js';
import Description from './Description.js';
import WhyUs from './WhyUs.js';
import SocialMedia from './SocialMedia.js';
import Footer from '../../components/Footer.js';


export default function AboutUs() {
  // to create light and dark mode 
  const [mode, setMode] = useState('light');

  const switchMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else if (mode === 'dark') {
      setMode('light');
    }
  }

  useEffect(() => {
    console.log(mode);
  }, [mode]);

  // colors for light and dark mode 
  const backgroundColor = mode === 'light' ? '#FFFDF0' : '#2A2B2A';
  const accentColor = mode === 'light' ? '#FDF5D5' : '#5A5A5A' ;
  // textColor and buttonColor share the same colors 
  const textColor = mode === 'light' ? '#2A2B2A' : '#FFFDF0' ;


  return (
    <div className = "about-us-container-padding"
      style={{ backgroundColor: backgroundColor, 
               color: textColor}}>

      {/* Dark Mode Button */}
      {/* to do: make the button stay in place */}
      <ThemeSwitcher mode={mode} switchMode={switchMode} />

      {/* Top half with the About Us and image carousel */}
      <div className ="flex-container-2">
        <Description />
        <ImageCarousel />
      </div>

      {/* Horizontal line */}
      <hr className="custom-line" />

      {/* Why Us and Contact Us (SocialMedia) */}
      <div className="flex-container-horizontal-wide-gap">
        <WhyUs accentColor = {accentColor} textColor = {textColor}/>
        <SocialMedia textColor = {textColor} backgroundColor = {backgroundColor}/>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}