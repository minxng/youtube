import { useState } from "react";

export default function Header({ search }) {
  const logo = "/images/logo.png";
  const [keyword, setKeyword] = useState("");
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    search(keyword);
  };
  return (
    <header className="flex justify-between items-center">
      <img src={logo} alt="로고" className="w-52" />
      <form
        className="flex justify-center items-center	w-full gap-4"
        onSubmit={handleOnSubmit}
      >
        <input
          type="text"
          value={keyword}
          onChange={handleOnChange}
          className="w-2/3 p-2 rounded-md focus:outline-none"
        />
        <button className="bg-lime-400	px-6 py-2 rounded-md">검색</button>
      </form>
    </header>
  );
}
