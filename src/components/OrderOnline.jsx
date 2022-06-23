import Order from "../images/orderonline.jpg";

const OrderOnline = () => {
  return (
    <section className="w-full relative my-10">
      <div className="h-[50%] relative">
        {/* Image */}
        <img
          src={Order}
          alt=""
          className="object-cover w-full h-[500px] relative"
        />
        {/* text on top of image */}
        <div className="absolute inset-x-2 md:inset-x-40 top-[20%] bg-white p-2.5 cursor-pointer">
          <h1 className="text-gray-700 text-center">GREENS JUST GOT FASTER!</h1>
          <h1 className="text-gray-700 text-center mt-5">Order Online</h1>
        </div>
      </div>
    </section>
  );
};

export default OrderOnline;
