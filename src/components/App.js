import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [] };

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

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                {this.state.videos.length} videos returned from YouTube API.
            </div>
        );
    }
}

export default App;