import HeroImg from "../images/hero.jpg";

const Hero = () => {
  return (
    <section className="w-full relative mb-10">
      <div className="relative">
        {/* Image */}
        <img
          src={HeroImg}
          alt=""
          className="object-cover w-full h-[500px] relative"
        />
        {/* text on top of image */}
        <div className="absolute inset-x-2 md:inset-x-40 top-[20%]  bg-white p-2.5">
          <h1 className="text-gray-700 text-center">VEGETARIAN CUISINE</h1>
          <h1 className="text-gray-700 text-center">
            DELIVERED TO YOUR DOOR STEP
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
