import React from "react";
import { Link } from "react-router-dom";

export default function VideoBox({ data }) {
  return (
    <div key={data.id.videoId}>
      <div className="w-1/2">
        <iframe
          id="ytplayer"
          type="text/html"
          title={data.id.videoId}
          src={`https://www.youtube.com/embed/${data.id.videoId}`}
          allowFullScreen
          className="rounded-md w-full"
        />
      </div>
      <p className="flex flex-col">
        <Link
          to={data.id.videoId}
          state={{ data }}
          className="text-white text-ellipsis overflow-hidden w-full break-words line-clamp-2"
        >
          {data.snippet.title}
        </Link>
        <span className="text-gray-300">{data.snippet.channelTitle}</span>
        <span className="text-gray-300">{data.snippet.publishedAt}</span>
      </p>
    </div>
  );
}
