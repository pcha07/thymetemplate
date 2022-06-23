import { AiOutlineMenu } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className="w-full h-full bg-white p-4 mb-10">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <h1 className="text-left text-gray-700">500 Terry Francois St.</h1>
          <h1 className="text-left text-gray-700">San Francisco, CA 94158</h1>
        </div>
        <div className="cursor-pointer md:flex md:space-x-2.5">
            <AiOutlineMenu className="!w-9 !h-9 text-yellow-600 md:hidden"/>
            <BsInstagram className="text-black !w-6 !h-6 hidden md:inline"/>
            <FiTwitter className="text-black !w-6 !h-6 hidden md:inline"/>
        </div>
      </div>
      <div>
          <h1 className="text-center font-semibold text-6xl text-yellow-600">THYME</h1>
      </div>
      <div className="hidden md:block w-full h-[1px] bg-gray-600 mt-5"/>
      <div className="hidden md:flex md:items-center md:justify-evenly md:mt-4 md:md-1.5">
        <p className="text-gray-700 hover:text-yellow-700 cursor-pointer hover:border-b border-yellow-700">Home</p>
        <p className="text-gray-700 hover:text-yellow-700 cursor-pointer hover:border-b border-yellow-700">Our Vision</p>
        <p className="text-gray-700 hover:text-yellow-700 cursor-pointer hover:border-b border-yellow-700">Order Online</p>
        <p className="text-gray-700 hover:text-yellow-700 cursor-pointer hover:border-b border-yellow-700">Menu</p>
        <p className="text-gray-700 hover:text-yellow-700 cursor-pointer hover:border-b border-yellow-700">Blog</p>
        <p className="text-gray-700 hover:text-yellow-700 cursor-pointer hover:border-b border-yellow-700">Contact Us</p>
      </div>
    </header>
  );
};

export default Navbar;
