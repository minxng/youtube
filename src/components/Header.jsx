import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

export default function Header({ search }) {
  const logo = "/images/yt_logo_rgb_light.png";
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleOnChange = (e) => {
    setKeyword(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    search(keyword);
    navigate("/");
  };
  return (
    <header className="flex justify-between items-center py-4">
      <Link to="/">
        <img src={logo} alt="로고" className="w-36" />
      </Link>
      <form className="flex justify-center w-full" onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleOnChange}
          className="w-2/3 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none"
        />
        <button className="border border-l-0	 border-gray-300 bg-gray-100	px-6 py-2 rounded-r-full">
          <CiSearch size="24" />
        </button>
      </form>
    </header>
  );
}
