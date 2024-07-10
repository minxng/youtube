import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import List from "./components/List";
import VideoItem from "./components/VideoItem";
import Header from "./components/Header";

function App() {
  const [searchParam, setsearchParam] = useState("");
  const search = (param) => {
    setsearchParam(param);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header search={search} />
          <List searchParam={searchParam} />,
        </>
      ),
    },
    {
      path: ":videoId",
      element: (
        <>
          <Header search={search} />
          <VideoItem />
        </>
      ),
    },
  ]);

  console.log("app");
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

// const [keyword, setKeyword] = useState("");
// const searchKeyword = (keyword) => {
//   setKeyword(keyword);
// };
export default App;
