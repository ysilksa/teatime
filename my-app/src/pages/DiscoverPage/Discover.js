import React, { useState, useEffect, useMemo } from 'react';
import '../../App.css';
import './Discover.css'
import { getAllUsers } from './DiscoverAPI.js'

// functions for page elements
import ThemeSwitcher from '../../components/ThemeSwitcher.js';
import FeedHeader from './FeedHeader.js';
import SocialMediaPost from './SocialMediaPost.js';
import PlacesToVisit from './PlacesToVisit.js';

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


        {/* usage of generic component - dark mode button */}
        <ThemeSwitcher mode={mode} switchMode={switchMode} />

        <div className = "left-right-container">
             {/* left side with the feed */}
             <div className="social-media-col">

                {/* top part holds the 'Discover' text and the plus button for a new post */}
                <FeedHeader />

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
            <PlacesToVisit />
        </div>
    </div>
    )
}
