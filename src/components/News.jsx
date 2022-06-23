import { AiOutlineRight } from "react-icons/ai";

const News = () => {
  return (
    <div className="mt-10 p-2.5 w-full">
      <div className="flex flex-col justify-center space-y-3">
        <div className="">
          <h1 className="text-lg text-gray-700 font-semibold">THYME NEWS</h1>
          <h1 className="text-3xl text-yellow-700 font-semibold">
            Spinach month
          </h1>
          <h1 className="text-3xl text-yellow-700 font-semibold">
            is finally here
          </h1>
        </div>
        <div className="flex flex-col justify-center space-y-2.5">
          <p className="text-gray-700">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            reprehenderit, assumenda consequuntur deserunt cupiditate aperiam.
          </p>
          <div className="flex space-x-2 cursor-pointer">
            <button className="text-gray-700">Read More Here</button>
            <AiOutlineRight className="!w-6 !h-6 text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
