import React from 'react';
import './AboutUs.css';

export default function SocialMedia({ textColor, backgroundColor }) {
    return (
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
    );
}