import axios from 'axios';

const KEY= 'AIzaSyDdIGd3TTdQPk3LmpH0mZi5AM4zjNhgRq8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});