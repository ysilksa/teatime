import React from 'react';
import '../App.css';

export default function AboutUs() {
  return (
    // <div className = "about-us-container-padding">
    <div>
      {/* Top half with the About Us and image carousel */}
      <div className ="flex-container-2">
        <div>
          <h2>About Us</h2>
          <p>We aim to connect the world through a common shared drink - milk tea!</p>
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
          <div className="rectangle-background">
            <p>
              Finding opportunities to meet new people can be hard, but finding a common topic of interest with someone else is harder. We strive to foster a community over a popular loved drink, no matter whether you’re a new freshman or a rising senior.
            </p>
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex-container-vertical-center">
          <h3>Contact Us!</h3>
          <button className="social-media-button">Email</button>
          <button className="social-media-button">Instagram</button>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Made by Isabella Yan (Chisa)</p>
      </div>
    </div>
  );
}
