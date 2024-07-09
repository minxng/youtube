import { useState, useEffect } from "react";
import VideoBox from "./VideoBox";

export default function List({ searchParam }) {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    console.log(searchParam, "searchParam");
    const url = searchParam ? `data/pack.json` : "data/test.json";
    // `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyCvfST-5IoBGYWd1ELGJMR8Cnp1gCL7Qb4`
    console.log(url, "url");
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchParam}&key=AIzaSyCvfST-5IoBGYWd1ELGJMR8Cnp1gCL7Qb4`
    )
      .then((resp) => resp.json())
      .then((data) => setVideo(data.items));
  }, [searchParam]);

  // const searchKeyword = (keyword) => {
  //   console.log("????");
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyCvfST-5IoBGYWd1ELGJMR8Cnp1gCL7Qb4`
  //   )
  //     .then((resp) => resp.json())
  //     .then((data) => setVideo(data.items));
  // };
  // if (searchParam) {
  //   searchKeyword(searchParam);
  // }
  return (
    <section className="grid grid-cols-4 p-20">
      {video.map((v) => (
        <VideoBox data={v} key={v.id.videoId} />
      ))}
    </section>
  );
}

// fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
//   .then((resp) => resp.json())
//   .then((data) => setProducts(data))
//   .catch((e) => setError("에러가 발생했음"))
//   .finally(() => setLoading(false));
// return () => {
//   console.log("clean!");
// };
