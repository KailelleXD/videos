import React from 'react';

// Functional component that renders the Embedded Video, Title, and Description data from the YouTube API.
const VideoDetail = ({ video }) => {
    // If video is false (null), then return an empty div (to prevent page load errors).
    if (!video) {
        return <div></div>
    }

    // Instantiate the variable 'videoSrc' with the YouTube embed URL + the video ID that the user selected.
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;