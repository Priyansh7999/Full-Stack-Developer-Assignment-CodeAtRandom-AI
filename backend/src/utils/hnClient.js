const axios = require('axios');
const BASE_URL = "https://hacker-news.firebaseio.com/v0";

async function getTopStories() {
    const { data } = await axios.get(`${BASE_URL}/topstories.json`);
    return data.slice(0, 5);
}

async function getStoryDetails(id) {
    const { data } = await axios.get(`${BASE_URL}/item/${id}.json`);
    return {
        id: data.id,
        title: data.title,
        url: data.url,
        score: data.score,
        time: data.time,
        type: data.type,
        by: data.by,
    }
}
module.exports = {
    getTopStories,
    getStoryDetails
};