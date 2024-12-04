import React, { useState } from 'react';
import {
  AiOutlineAppstore,
  AiOutlineBook,
  AiOutlineHighlight,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      {/* Mobile menu icon */}
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-5 right-4 z-[99] md:hidden"
      />

      {/* Mobile navigation menu */}
      {nav && (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[20]">
          <Link
            to="/"
            onClick={() => setNav(false)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            to="/create-app"
            onClick={() => setNav(false)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineAppstore size={20} />
            <span className="pl-4">Build an App</span>
          </Link>
          <Link
            to="/write-book"
            onClick={() => setNav(false)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineBook size={20} />
            <span className="pl-4">Write a Book</span>
          </Link>
          <Link
            to="/design"
            onClick={() => setNav(false)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHighlight size={20} />
            <span className="pl-4">Design your Brand & Logo</span>
          </Link>
          <Link
            to="/create-product"
            onClick={() => setNav(false)}
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineShoppingCart size={20} />
            <span className="pl-4">Create a Product</span>
          </Link>
        </div>
      )}

      {/* Desktop navigation menu */}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link
            to="/"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            to="/create-app"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineAppstore size={20} />
          </Link>
          <Link
            to="/write-book"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineBook size={20} />
          </Link>
          <Link
            to="/design"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineHighlight size={20} />
          </Link>
          <Link
            to="/create-product"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
          >
            <AiOutlineShoppingCart size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
