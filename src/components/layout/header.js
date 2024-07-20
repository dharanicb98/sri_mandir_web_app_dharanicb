import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authFail } from "../../store/reducers/authSlice";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, User } from "../../icons";
// import Cookies from "js-cookie";

const Header = () => {
  const token = localStorage.getItem("token");
  const userDetails = jwtDecode(token);
  const navigate = useNavigate();
  const { email, name, picture } = userDetails;

  const dispatch = useDispatch();


  const handleLogOut = () => {
    localStorage.removeItem("token");
    dispatch(authFail());
  };

  
  const handlePoojaNavigation = async () => {
    navigate('/pooja')
  }





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
       

        <div className="absolute invisible group-hover:visible w-[299px]  !-right-[10px] text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 block" >
          <ul className="py-1 mb-[0px] bg-white" >
            <div  className="overflow-y-auto sticky top-0 bg-white pt-2">
              <ul className="mb-[0px] px-3">
                <li className="pl-1">
                  <a href="#" className="inline-flex justify-between w-full text-[#707070] hover:text-[#707070]">
                    <span className="text-[16px] font-medium">Hello, Sri Mandir Bhakt</span>
                  </a>
                </li>
                <li className="pl-1 py-2">
                  <a href="#" className="text-[14px] font-medium text-[#707070] hover:text-[#707070]">
                    Welcome to Sri Mandir Puja Seva
                  </a>
                </li>
              </ul>
              <hr />
            </div>
            <div className="w-full bg-white">
              <div className="mt-3 mx-3">
                <span className="text-[#707070] text-[12px] font-semibold">Account Details</span>
                <button className="flex flex-row justify-between mt-3 w-full">
                  <div className="flex ">
                     {/* <User/> */}
                    <span className="ml-[10px] text-[14px] font-medium text-[#111928] w-full">My profile</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="ml-2 flex">
                      <ChevronRight/>
                    </span>
                  </div>
                </button>
                <button className="flex flex-row justify-between mt-[19px] w-full">
                  <div className="flex">
            
                    <span className="ml-[10px] text-[14px] font-medium text-[#111928]">My Puja Bookings</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="ml-2 flex">
                     <ChevronRight/>
                    </span>
                  </div>
                </button>
                <button className="flex flex-row justify-between mt-[19px] w-full" >
                  <div className="flex">
                    <span className="ml-[10px] text-[14px] font-medium text-[#111928]">My Ramotsav Bookings</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="ml-2 flex">
                      <ChevronRight/>
                    </span>
                  </div>
                </button>
                <a className="flex flex-row justify-between mt-[19px] w-full" href="#">
                  <div onClick={handlePoojaNavigation} className="flex">
                    <span className="ml-[10px] text-[14px] font-medium text-[#111928]">Book a Puja</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="ml-2 flex">
                     <ChevronRight/>
                    </span>
                  </div>
                </a>
                
                <div className="flex flex-row justify-between mt-[19px] w-full">
                <div onClick={handleLogOut} className="flex">
                    <span className="ml-[10px] text-[14px] font-medium text-[#111928]">Logout</span>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="ml-2 flex">
                     <ChevronRight/>
                    </span>
                  </div>
                </div>


              </div>
            
            </div>
          </ul>
        </div>

    

      </div>
      
    </header>
  );
};

export default Header;
