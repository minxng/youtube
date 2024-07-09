import React from "react";
import { useLocation, useParams } from "react-router-dom";

export default function VideoItem() {
  const videoId = useParams().videoId;
  const data = useLocation().state;
  console.log(data);
  return (
    <div className="w-1/2 h-full">
      <iframe
        id="ytplayer"
        type="text/html"
        title={videoId}
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        className="rounded-md"
      />
    </div>
  );
}
