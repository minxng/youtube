import React from "react";
import { Link } from "react-router-dom";

export default function VideoBox({ data }) {
  return (
    <Link
      to={data.id.videoId}
      state={data.snippet}
      className="flex flex-col"
      key={data.id.videoId}
    >
      <img
        src={data.snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-lg"
      />
      <span className="text-ellipsis overflow-hidden w-full break-words line-clamp-2">
        {data.snippet.title}
      </span>
      <span className="text-gray-500">{data.snippet.channelTitle}</span>
      <span className="text-gray-500">{data.snippet.publishedAt}</span>
    </Link>
  );
}
