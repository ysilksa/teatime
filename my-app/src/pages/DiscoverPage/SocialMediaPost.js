import React, { useMemo } from 'react';
import { HeartIcon, CommentIcon } from './SocialMediaIcons.js';
import '../../App.css';
import './Discover.css';

const SocialMediaPost = React.memo(({ user, index }) => {
    const timestamp = useMemo(
        () => (index === 0 ? '20 min ago' : '1 hr ago'),
        [index]
    );

    return (
        <div className="social-media-post-container">
            {/* username and timestamp */}
            <div className="username-container">
                <img
                    src={user.profile_picture}
                    alt={`${user.first_name}'s profile`}
                    className="circular-icon-image"
                />
                <h3>
                    {`${user.first_name} ${user.last_name}`}
                    <br />
                    {timestamp}
                </h3>
            </div>

            {/* example post descriptions */}
            <div>
                <p>
                    {index === 0
                        ? 'Had fun on the weekend!! Went to Ume Tea with bff~'
                        : "Go to Gather's if you stop by Chicago! I love their hojicha rose lattes."}
                </p>
            </div>

            {/* image carousel */}
            <div className="image-carousel-container">
                {index === 0 ? (
                    <>
                        <img
                            src="https://i.imgur.com/qrM56W6.jpeg"
                            alt="Thai Frose from Ume Tea"
                            className="post-image"
                        />
                        <img
                            src="https://i.imgur.com/S8cHWww.jpeg"
                            alt="Thai Frose from Ume Tea"
                            className="post-image"
                        />
                    </>
                ) : (
                    <>
                        <img
                            src="https://i.imgur.com/NWzvnPm.jpeg"
                            alt="Rose hojicha latte with boba from Gathers"
                            className="post-image"
                        />
                        <img
                            src="https://i.imgur.com/QA3obdD.jpeg"
                            alt="Two My Melody and Kuromi blind keychains"
                            className="post-image"
                        />
                    </>
                )}
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

export default SocialMediaPost;
