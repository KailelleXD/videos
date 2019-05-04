import axios from 'axios';

// Assigns our YouTube API key from .env to the variable KEY.
const KEY = process.env.REACT_APP_APIKEY;

// Creates a pre-configured instance of Axios (specific to YouTube API documentation).
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: KEY
    }
});