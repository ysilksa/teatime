// import { PureComponent } from 'react';
import '../App.css';
import './Discover.css'

export default function Discover() {
    return (
    <div className = "discover-container-padding"
        style={{ backgroundColor: '#FFFDF0', 
        }}>
        <div className = "left-right-container">
            {/* left side with the feed  */}
            <div className = "social-media-col">
                {/* top part holds the 'Discover' text and the plus button for a new post */}
                <div className = "discover-button-container">
                    {/* 'Discover' book label */}
                    <div>
                        <h1>
                        Discover
                        </h1>
                    </div>

                    {/* New Post Button */}
                    <div>
                        <button className = "new-post-button">
                            +
                        </button>
                    </div>
                
                </div>   
                

                {/* example post 1 */}
                <div className = "social-media-post-container">
                    {/* user's name */}
                    <div className = "username-container">
                        {/* profile icon */}
                        <div className = "circular-icon-image"></div>
                        
                        {/* username and timestamp */}
                        <h3>
                            User 1 
                            <br />
                            20 min ago 
                        </h3>
                       
                    </div>
                    

                    {/* post's description */}
                    <div>
                        <p>
                            Had fun on the weekend!! Went to Ume Tea with bff~ 
                        </p>
                    </div>

                    {/* post's images */}
                    <div className = "image-carousel-container">
                        <div className = "post-image">
                        </div>

                        <div className = "post-image">
                        </div>

                        <div className = "post-image">
                        </div>
                    </div>

                    <div>
                        <HeartIcon></HeartIcon>
                    </div>

                </div>

                {/* example post 2 */}
                <div className = "social-media-post-container">
                    {/* user's name */}
                    <div className = "username-container">
                        {/* profile icon */}
                        <div className = "circular-icon-image"></div>
                        
                        {/* username and timestamp */}
                        <h3>
                            User 2
                            <br />
                            1 hr ago 
                        </h3>
                       
                    </div>
                    

                    {/* post's description */}
                    <div>
                        <p>
                            Go to Gather's if you stop by Chicago! I love their hojicha rose lattes. 
                        </p>
                    </div>

                    {/* post's images */}
                    <div className = "image-carousel-container">
                        <div className = "post-image">
                        </div>

                        <div className = "post-image">
                        </div>

                        <div className = "post-image">
                        </div>
                    </div>

                </div>

            </div>

            {/* right side with browsing new people or places to visit */}
            <div className = "social-media-col">
                <h1>
                    Places For You
                </h1>
                
            </div>
        </div>
    </div>
    )
}


// heart icon for the post 
function HeartIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width = "20"
        height = "20"
        fill = "transparent"
        stroke = "black"
        strokeWidth = "2"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }