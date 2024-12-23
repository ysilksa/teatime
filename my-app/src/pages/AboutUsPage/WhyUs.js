import React from 'react';
import './AboutUs.css';

export default function WhyUs({ accentColor, textColor } ) {
    return (
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
    );
}