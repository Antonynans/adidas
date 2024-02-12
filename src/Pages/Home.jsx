import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Cart from "../Components/Cart";


export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className=""> */}
      <Hero />
      <About />
      <Cart />
      {/* </div> */}
      <Footer />
    </>
  );
}
