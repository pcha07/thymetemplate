import Reso from "../images/reservations.jpg";

const Reservations = () => {
  return (
    <div className="mt-10 w-full relative">
      <div className="relative">
        <img
          src={Reso}
          alt="reservations"
          className="object-cover w-full h-[300px] relative"
        />
        <div className="absolute inset-x-2 md:inset-x-40 top-[20%] p-2.5">
          <h1 className="text-white font-bold font-serif text-3xl text-center">RESERVATIONS</h1>
          <h1 className="text-white font-bold font-serif text-2xl text-center bg-yellow-700 p-2 mt-1 cursor-pointer">
            BOOK TABLE NOW
          </h1>
          
        </div>
      </div>
    </div>
  );
};

export default Reservations;
