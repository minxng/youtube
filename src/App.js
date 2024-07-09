import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import VideoItem from "./components/VideoItem";
import Header from "./components/Header";

function App() {
  const [searchParam, setsearchParam] = useState("");
  const router = createBrowserRouter([
    {
      path: "/",
      element: <List searchParam={searchParam} />,
    },
    {
      path: ":videoId",
      element: <VideoItem />,
    },
  ]);
  const search = (param) => {
    setsearchParam(param);
  };
  console.log("app");
  return (
    <>
      <Header search={search} />
      <RouterProvider router={router} />
    </>
  );
}

// const [keyword, setKeyword] = useState("");
// const searchKeyword = (keyword) => {
//   setKeyword(keyword);
// };
export default App;
