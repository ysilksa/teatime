import React, { useState, useEffect, useMemo } from 'react';
import '../App.css';
import './Discover.css'
import { getAllUsers } from './DiscoverAPI.js'
import GenericButton from '../components/AllButtons.js'

// importing icon 
// https://react-icons.github.io/react-icons/
import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa";

export default function Discover() {
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

    // text on the dark mode button 
    const buttonText = mode === 'light' ? "Dark Mode" : "Light Mode" ;

    ///
    ///
    ///

    // getAllUsers 
    // useState that stores users' data 
    const [users, setUsers] = useState([]); 


    // useEffect that fetches all users' data during rendering 
    useEffect(() => {
        getAllUsers()
            .then(data => setUsers(data))
            .catch(error => console.error('error fetching users:', error));
    }, []);

    // memoize the users displayed on the page so it's faster and usable for react.memo 
    const displayedUsers = useMemo(() => users.slice(2, 4), [users]);

    // web page
    return (
    <div className = "discover-container-padding"
        style={{ backgroundColor: backgroundColor, 
                 color: textColor 
                }}>


        {/* usage of generic component */}
        {/*                            */}
        {/*           TO FIX           */}
        {/*                            */}
        <GenericButton
            label={buttonText}
            onClick={switchMode}
            style={{ 
                backgroundColor: mode === 'light' ? '#2A2B2A' : '#FFFDF0', 
                color: mode === 'light' ? '#FFFDF0' : '#2A2B2A' 
            }}
            className="dark-mode-button" 
        />


        <div className = "left-right-container">
             {/* left side with the feed */}
             <div className="social-media-col">

                {/* top part holds the 'Discover' text and the plus button for a new post */}
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

                {/* import 2 users' names from API to display */}
                {displayedUsers.map((user, index) => (
                    <SocialMediaPost 
                        key={user.id} 
                        user={user} 
                        index={index} 
                    />
                ))}
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

//
// external functions
//


// use react.memo for the 2 sample posts 
const SocialMediaPost = React.memo(({user, index}) => {
    // timestamp with useMemo
    const timestamp = useMemo(() => (index === 0 
                                    ? '20 min ago' 
                                    : '1 hr ago'), [index]);


    return (
        <div className="social-media-post-container">
            {/* username and timestamp */}
            <div className="username-container">
                {/* profile picture */}
                <img src={user.profilePicture} alt={`${user.firstName}'s profile`} className="circular-icon-image" />
                <h3>{`${user.firstName} ${user.lastName}`}
                    <br />
                    {timestamp}
                </h3>
            </div>

            {/* example post descriptions */}
            <div>
                <p>{index === 0 
                    ? 'Had fun on the weekend!! Went to Ume Tea with bff~' 
                    : "Go to Gather's if you stop by Chicago! I love their hojicha rose lattes."}</p>
            </div>
             
            {/* image carousel  */}
            <div className="image-carousel-container">
                {/* image 1 */}
                {index === 0 
                    ? <img src="https://i.imgur.com/qrM56W6.jpeg" alt="Thai Frose from Ume Tea" className="post-image"/>
                    : <img src="https://i.imgur.com/NWzvnPm.jpeg" alt="Rose hojicha latte with boba from Gathers" className="post-image"/>
                }

                {/* image 2 */}
                {index === 0 
                    ? <img src="https://i.imgur.com/S8cHWww.jpeg" alt="Thai Frose from Ume Tea" className="post-image"/>
                    : <img src="https://i.imgur.com/QA3obdD.jpeg" alt="Two My Melody and Kuromi blind keychains" className="post-image"/>
                }
            </div>
            
            {/* heart icon and comment icon */}
            <div className="likes-comment-container">
                <div className="likes-comment-container-inner">
                    <HeartIcon />
                    {index === 0 ? 124 : 12}
                </div>
                <div className="likes-comment-container-inner">
                    <CommentIcon />
                    {index === 0 ? 137 : 14}
                </div>
            </div>
        </div>
    );
});

// heart icon for the post 
function HeartIcon({size = 20, color = '#2A2B2A'}) {
    return (
    <div>
        <FaRegHeart size = {size}  color = {color} />
    </div>
    );
  }

// comment icon for the post 
function CommentIcon({size = 20, color = '#2A2B2A'}) {
  return (
   <div>
        <FaRegCommentAlt size = {size}  color = {color} />
   </div>
  );
}