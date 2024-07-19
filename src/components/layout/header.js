import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authFail } from "../../store/reducers/authSlice";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
// import Cookies from "js-cookie";

const Header = () => {
  const token = localStorage.getItem("token");
  const userDetails = jwtDecode(token);
  const { email, name, picture } = userDetails;

  const dispatch = useDispatch();
  const handleGoToWebsite = () => {
    window.open("https://www.srimandir.com/?lang=en");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(authFail());
  };

  return (
    <header className="bg-white h-[70px] font-bold text-gray-900 w-[100%] z-[10] flex justify-between items-center px-[20px] fixed top-0 left-0 right-0 shadow-sm">
      <Link to="/">
        <div className="flex gap-2 self-center items-center text-[12px] font-normal leading-[16.34px] md:text-[16px] md:font-semibold md:leading-[21.79px] block py-2 pr-4 pl-3 border-b border-gray-100 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-600 lg:p-0">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7b/ac/c4/7bacc46b-58e6-8d17-8cd7-cf81958e3a4d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp"
            className="h-10 rounded-2xl"
            alt="sri mandir logo"
          />
          <h1>Sri Mandir</h1>
        </div>
      </Link>
      <ul className="flex justify-between gap-4">
        <li className="text-[12px] font-normal leading-[16.34px] md:text-[16px] md:font-semibold md:leading-[21.79px] block py-2 pr-4 pl-3 border-b border-gray-100 text-orange-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-600 lg:p-0 dark:text-orange-500 lg:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 lg:dark:hover:bg-transparent dark:border-gray-700">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-[12px] font-normal leading-[16.34px] md:text-[16px] md:font-semibold md:leading-[21.79px] block py-2 pr-4 pl-3 border-b border-gray-100 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-600 lg:p-0 dark:text-orange-500 lg:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 lg:dark:hover:bg-transparent dark:border-gray-700">
          <Link to={"/pooja"}>Pooja</Link>
        </li>
        <li className="text-[12px] font-normal leading-[16.34px] md:text-[16px] md:font-semibold md:leading-[21.79px] block py-2 pr-4 pl-3 border-b border-gray-100 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-600 lg:p-0 dark:text-orange-500 lg:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 lg:dark:hover:bg-transparent dark:border-gray-700">
          <Link to={"/panchang"}>Panchang</Link>
        </li>
        <li className="text-[12px] font-normal leading-[16.34px] md:text-[16px] md:font-semibold md:leading-[21.79px] block py-2 pr-4 pl-3 border-b border-gray-100 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-600 lg:p-0 dark:text-orange-500 lg:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 lg:dark:hover:bg-transparent dark:border-gray-700">
          <Link to={"/temples"}>Temples</Link>
        </li>
        <li className="text-[12px] font-normal leading-[16.34px] md:text-[16px] md:font-semibold md:leading-[21.79px] block py-2 pr-4 pl-3 border-b border-gray-100 text-black hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-orange-600 lg:p-0 dark:text-orange-500 lg:dark:hover:text-orange-500 dark:hover:bg-gray-700 dark:hover:text-orange-500 lg:dark:hover:bg-transparent dark:border-gray-700">
          <Link to={"/library"}>Library</Link>
        </li>
      </ul>
      <div className="relative group">
        <img
          src={`${picture}`}
          alt="profile image"
          className="w-[37px] h-[37px] rounded-full cursor-pointer"
        />
        <div
          className={`absolute bg-white shadow-lg p-6 rounded-md flex flex-col  invisible group-hover:visible -left-[150px] w-[200px]`}
        >
          <span className="text-[20px] font-medium">{name && name}</span>
          <span className="text-slate-500 text-[11px]">{email && email}</span>
          <span className="cursor-pointer py-1" onClick={handleGoToWebsite}>
            Go to Website
          </span>
          <hr />
          <span onClick={handleLogOut} className="cursor-pointer">
            Logout
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
