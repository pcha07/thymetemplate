import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="bg-yellow-700 w-full p-2.5">
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center md:items-center">
          <h1 className="text-sm text-white">
            Join our mailing list for updates
          </h1>
        </div>
        <div className="flex flex-col justify-center md:items-center space-y-2">
          <h1 className="text-white text-sm">Enter your email here*</h1>
          <input
            type="email"
            className="w-full p-2 outline-none md:w-1/2"
            placeholder="Email"
          />
          <button className="w-full bg-white p-2 text-gray-700 md:w-1/2">
            Subscribe
          </button>
          <p className="text-sm text-white">Thanks for submitting!</p>
        </div>
        <div className="mt-4 flex flex-col justify-center">
          <p className="text-white">&copy; 2022 by Thyme. Proudly created</p>
          <p className="text-white">with ResDev.com</p>
          <div className="mt-2 flex space-x-5">
            <BsInstagram className="text-white !w-6 !h-6" />
            <FiTwitter className="text-white !w-6 !h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
