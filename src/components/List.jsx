import { useState, useEffect } from "react";
import VideoBox from "./VideoBox";

export default function List({ searchParam }) {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParam}&key=AIzaSyCvfST-5IoBGYWd1ELGJMR8Cnp1gCL7Qb4`
    )
      .then((resp) => resp.json())
      .then((data) => setVideo(data.items));
  }, [searchParam]);

  return (
    <section className="grid grid-cols-4 p-20">
      {video.map((v) => (
        <VideoBox data={v} key={v.id.videoId} />
      ))}
    </section>
  );
}
