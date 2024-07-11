const google_api_key="AIzaSyC79szoXNc4EmqinQNHbD2X4O7QmbjoVIg";
export const LIVE_CHAT_COUNT = 25;
export const Youtube_Videos_Api=  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
google_api_key+
"&id=";
export const YOUTUBE_SEARCH_API=     "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_SEARCH_VIDEOS =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=" +
    google_api_key+
    "&q=";
// Live Chat >>>> Infinite Scroll >>>>>> Pagination