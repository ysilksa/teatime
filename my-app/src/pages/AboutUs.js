import React from 'react';
import { useState, useEffect } from 'react';
import GenericButton from '../components/AllButtons.js'
import '../App.css';
import './AboutUs.css'

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
  // textColor and buttonColor share the same colors 
  const textColor = mode === 'light' ? '#2A2B2A' : '#FFFDF0' ;
  const accentColor = mode === 'light' ? '#FDF5D5' : '#5A5A5A' ;

  // text on the dark mode button 
  const buttonText = mode === 'light' ? "Dark Mode" : "Light Mode" ;

  return (
    <div className = "about-us-container-padding"
      style={{ backgroundColor: backgroundColor, 
               color: textColor}}>

      {/* usage of generic component */}
      <GenericButton
            label={buttonText}
            onClick={switchMode}
            style={{ 
                backgroundColor: mode === 'light' ? '#2A2B2A' : '#FFFDF0', 
                color: mode === 'light' ? '#FFFDF0' : '#2A2B2A' 
            }}
            className="dark-mode-button" 
      />

      {/* Top half with the About Us and image carousel */}
      <div className ="flex-container-2">
        <div  className = "about-us-description-container"> 
          <h2> About Us </h2>
          <p className = "about-us-description-text-container">
            We aim to connect the world through a common shared drink - milk tea!
          </p>
        </div>

        {/* Image carousel */}
        <div className="image-container">
          <img src="https://i.imgur.com/8e7CJOe.jpeg" alt="Oreo Creme Brulee Boba from Ume Tea" className="image" />
          <img src="https://i.imgur.com/2XzeXKP.jpeg" alt="Peach tea from Kung Fu Tea collaboration" className="image lower" />
          <img src="https://i.imgur.com/qTt0Sq4.jpeg" alt="Mango Sago drink from Ume Tea" className="image" />
        </div>
      </div>

      {/* Horizontal line */}
      <hr className="custom-line" />

      {/* Why Us and Contact Us */}
      <div className="flex-container-horizontal-wide-gap">
        <div className="flex-container-vertical-center">
          <h3>Why Us?</h3>
          <div className="rectangle-background"
               style={{ backgroundColor: accentColor, 
                        color: textColor}}>
            <p>
              Finding opportunities to meet new people can be hard, but finding a common topic of interest with someone else is harder. We strive to foster a community over a popular loved drink, no matter whether you’re a new freshman or a rising senior.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-container-vertical-center">
          <h3>Contact Us!</h3>
          <button className="social-media-button"
                  style={{ backgroundColor: textColor, 
                    color: backgroundColor}}>
                  Email</button>
          <button className="social-media-button"
                  style={{ backgroundColor: textColor, 
                          color: backgroundColor}}>
                  Instagram</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Made by Isabella Yan (Chisa)</p>
      </div>
    </div>
  );
}