import React from "react";
import "./Navbar.css";
import logo from "../../Assets/twitter.png";
import { Search } from "../Search/Search";
import { useData } from "../../Context/DataContext";

import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const {
    userSearch,
    setUserSearch,
    dataState: { users },
    darkMode,
  } = useData();
  const socialUser = JSON.parse(localStorage.getItem("socialUser"));
  const navigate = useNavigate();
  const searchValue = userSearch
    ? users?.filter((item) =>
        item.username === socialUser.username
          ? null
          : item.userHandler.toLowerCase().includes(userSearch.toLowerCase())
      )
    : [];
  const handleClick = (userHandler) => {
    setUserSearch("");
    navigate(`/profile/${userHandler}`);
  };

  return (
    <nav className={`navbar ${darkMode && "bgDarkmode"}`}>
      <div className="nav-main flex">
        <div className="nav-logo">
          <img src={logo} alt="logo" height={50} width={50} />
        </div>
        <div className="nav-heading" onClick={() => navigate("/")}>
          Twittle
        </div>
      </div>
      <div className="search-navbar">
        <Search />
        <div className="searchOutput">
          <ul className={`searchResults  ${darkMode && "bgDarkmode"}`}>
            {searchValue?.map((data) => (
              <li
                className={`searchResult-item  ${darkMode && "bgDarkmode"}`}
                key={data._id}
              >
                <div
                  className={`profile-container  ${
                    darkMode && "bgSecondaryDarkMode"
                  }`}
                >
                  <img
                    src={data.profilePic}
                    alt="profile1"
                    className="profileImg"
                    onClick={() => handleClick(data.userHandler)}
                  />
                  <div
                    className={`profile-info  ${
                      darkMode && "bgSecondaryDarkMode"
                    }`}
                  >
                    <p
                      className={`user-follow-name  ${
                        darkMode && "bgSecondaryDarkMode"
                      }`}
                      onClick={() => handleClick(data.userHandler)}
                    >
                      {data.firstName} {data.lastName}
                    </p>
                    <span
                      className={`userId  ${darkMode && "btnDarkUsernname"}`}
                      onClick={() => handleClick(data.userHandler)}
                    >
                      {data.userHandler}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
