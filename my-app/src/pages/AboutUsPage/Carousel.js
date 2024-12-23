import React from 'react';
import './AboutUs.css';

export default function ImageCarousel() {
    return (
        // image carousel 
        <div className="image-container">
          <img src="https://i.imgur.com/8e7CJOe.jpeg" alt="Oreo Creme Brulee Boba from Ume Tea" className="image" />
          <img src="https://i.imgur.com/2XzeXKP.jpeg" alt="Peach tea from Kung Fu Tea collaboration" className="image lower" />
          <img src="https://i.imgur.com/qTt0Sq4.jpeg" alt="Mango Sago drink from Ume Tea" className="image" />
        </div>
    );
}