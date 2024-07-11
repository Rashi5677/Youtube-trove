import React, { useEffect, useState } from "react";
import { Youtube_Videos_Api } from "../utils/Constants"; // Ensure you have the correct path and constant name
import VideoCards, { AdVideoCard } from "./VideoCards"; // Ensure you have the correct component names
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(Youtube_Videos_Api);
      const json = await data.json();
      setVideos(json.items || []); // Ensure you set an empty array if json.items is undefined
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCards info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
