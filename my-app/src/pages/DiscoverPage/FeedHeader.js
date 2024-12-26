import React from 'react';
import './Discover.css';

export default function FeedHeader() {
    return (
        <div className="discover-button-container">
                    <div>
                        <h1>
                            Discover
                        </h1>
                    </div>

                    {/* New Post Button */}
                    <div>
                        <button className="new-post-button">+</button>
                    </div>
        </div>   
    );
}