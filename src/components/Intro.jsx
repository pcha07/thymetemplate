import { AiOutlineRight } from "react-icons/ai";
import Showcase from "../images/showcase.jpg";

const Intro = () => {
  return (
    <div className="p-2.5 flex flex-col justify-center space-y-6 md:flex-row md:items-center md:justify-evenly">
      <div className="flex flex-col space-y-2 md:basis-[80%] md:px-3">
        <h1 className="text-2xl text-yellow-900">Our Restaurant</h1>
        <h1 className="text-4xl text-yellow-700">Local Fresh Cuisine</h1>
        <div className="flex flex-col space-y-2">
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ex
          ratione quod, qui natus aspernatur optio inventore quas assumenda
          veniam maiores? Ipsam quidem debitis error similique praesentium,
          doloremque sapiente minus soluta, obcaecati ullam atque esse
          dignissimos deserunt alias libero! Odit magni architecto dignissimos
          qui illo, porro ipsum iste voluptates id.
        </p>
        <div className="flex space-x-2 items-center cursor-pointer w-full">
          <button className="text-gray-700">Read More Here</button>
          <AiOutlineRight className="!w-6 !h-6 text-gray-700" />
        </div>
      </div>
      </div>
      
      <div className="w-full flex items-center justify-center">
        <img src={Showcase} alt="" className="object-cover h-[400px] w-full" />
      </div>
    </div>
  );
};

export default Intro;
