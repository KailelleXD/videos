import './VideoItem.css';
import React from 'react';

// Functional component that renders data passed in as props from the VideoList component.
const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div 
            onClick={() => {onVideoSelect(video)}} 
            className="video-item item">
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                />
                <div className="content">
                    <div className="header">{video.snippet.title}</div>
                </div>
        </div>
    )
};

export default VideoItem;