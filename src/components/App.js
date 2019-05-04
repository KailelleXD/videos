import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

// Sets default search term after page loads.
const defaultTerm = "React Native Tutorials";

// Top-level component displays the entire application.
class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    // Searches for defaultTerm after page loads.
    componentDidMount() {
        this.onTermSubmit(defaultTerm);
    }

    // HELPER FUNCTIONS ////

    // Calls pre-configured instance of Axios to access the YouTube API.
    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    // When user selects a video from VideoList component, setState to that selected video.
    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        })
    };

    // RENDER FUNCTION ////

    // When a search query is run, returns the number of videos found.
    onSearchDisplay = () => {
        if(this.state.videos.length > 0) {
            return (
                <div>
                    {this.state.videos.length} videos returned from YouTube API.
                </div>
            )
        }
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar 
                    onTermSubmit={this.onTermSubmit} 
                    defaultTerm={defaultTerm}
                    />
                {this.onSearchDisplay()}
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                        </div> 
                        <div className="six wide column">
                        <VideoList
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos}
                            />
                        </div>   
                    </div>
                </div>
            </div>
        );
    }
}

export default App;