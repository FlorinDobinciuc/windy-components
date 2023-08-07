import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-6">
      <ul className="flex justify-between">
        <li className="text-white hover:text-gray-200">
          <a href="#home">Home</a>
        </li>
        <li className="text-white hover:text-gray-200">
          <a href="#about">About</a>
        </li>
        <li className="text-white hover:text-gray-200">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
