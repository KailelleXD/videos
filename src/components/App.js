import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    // HELPER FUNCTIONS ////

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items
        })
    };

    onVideoSelect = (video) => {
        console.log('from App.js Component: ', video);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {this.state.videos.length} videos returned from YouTube API.
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        );
    }
}

export default App;