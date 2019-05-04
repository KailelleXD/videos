import './VideoList.css';
import React from 'react';
import VideoItem from './VideoItem';

// Functional component that renders a list of VideoItem components (depended on what is returned from the YouTube API)
const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return (
            <VideoItem 
                key={video.id.videoId} 
                onVideoSelect={onVideoSelect} 
                video={video} 
                />
        );
    });

    return (
        <div className="video-list ui relaxed divided list">
            {renderedList}
        </div>
    )
};

export default VideoList;