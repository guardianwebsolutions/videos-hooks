import axios from "axios";

const KEY = "AIzaSyAOGrLZQJhyem7fRvxJ9sL-ZxNY1Z8t82g";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
