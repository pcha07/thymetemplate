import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import News from "./components/News";
import OrderOnline from "./components/OrderOnline";
import Reservations from "./components/Reservations";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Intro/>
      <News/>
      <OrderOnline/>
      <Testimonials/>
      <Reservations/>
      <Footer/>
    </div>
  );
}

export default App;
