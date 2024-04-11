import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchFromUrl = urlParams.get("searchTerm");
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [location.search]);
  return (
    <header className="bg-slate-200 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-small sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Prime</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            className="bg-transparent focus:outline-none w-24 sm:w-64"
            type="text"
            placeholder="Search.."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline hover:cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full h-7 w-7 object-cover"
              />
            ) : (
              <li className=" text-slate-700 hover:underline hover:cursor-pointer">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}
