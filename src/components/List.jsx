import { useState, useEffect } from "react";
import VideoBox from "./VideoBox";

export default function List({ searchParam }) {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParam}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setVideo(data.items.filter((item) => item.id.kind === "youtube#video"));
      });
  }, [searchParam]);

  return (
    <section className="grid grid-cols-4 py-4 gap-x-6">
      {video.map((v) => (
        <VideoBox data={v} key={v.id.videoId} />
      ))}
    </section>
  );
}
