import React from 'react';
import './Discover.css';

export default function PlacesToVisit() {
    return (
        <div className = "social-media-col">
                <h1>
                    Places For You
                </h1>

                {/* contains the boba sgop recommendations */}
                <div className = 'boba-shop-container'>
                    {/* boba shop 1 */}
                    <div className = 'boba-shop-image-container'>
                        {/* shop image */}
                        <img src="https://i.imgur.com/iEvMlCc.png" alt="Smoked Oreo Smoothie Promo from Happy Lemon Promotion"/>

                        {/* shop name */}
                        <div className = 'boba-shop-name-text'>
                            <p2>
                                Happy Lemon
                            </p2>
                        </div>

                    </div>

                    {/* boba shop 2 */}
                    <div className = 'boba-shop-image-container'>
                        {/* shop image */}
                        <img src="https://i.imgur.com/0ig5N81.png" alt="Rose Drinks from Ume Tea Promotion"/>

                        {/* shop name */}
                         <div className = 'boba-shop-name-text'>
                            <p2>
                                Ume Tea
                            </p2>
                        </div>
                        
                    </div>

                    {/* boba shop 3*/}
                    <div className = 'boba-shop-image-container'>
                        {/* shop image */}
                        <img src="https://i.imgur.com/tstytZI.png" alt="Two Drinks From Gathers"/>

                         {/* shop name */}
                         <div className = 'boba-shop-name-text'>
                            <p2>
                                Gathers
                            </p2>
                        </div>
                        
                    </div>
                </div>
                
            </div>
    );
}