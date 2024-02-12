import { HiPlus } from "react-icons/hi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

/* eslint-disable react/no-unescaped-entities */
export default function Cart() {
  return (
    <div className="pt-24" id="cart">
      <div className="lg:flex items-end justify-between max-w-[1600px] mx-auto pb-24 lg:h-[40rem]">
        <div className="lg:w-2/3  flex items-end relative h-60">
          <img
            src="/Main.png"
            alt="adidas shoe"
            className="w-4/5 lg:ml-[20%]"
          />
          <img
            src="/logo-black.png"
            alt="logo image"
            className="absolute bottom-0 left-0 w-full h-full opacity-5 flip_image"
          />
        </div>
        <div className="lg:w-1/4 lg:py-0 py-8 lg:px-0 px-4 lg:mr-[10%]">
          <h2 className="lg:text-3xl pb-4 font-semibold">
            Support and ultralight comfort zone is guaranteed
          </h2>
          <p className="font-semibold leading-8 text-[17px]">
            The company was started by Adolf Dassler in his mother's house he
            was joined by his elder brother Rudolf Molded EVA midsole plug.
          </p>
          <h2 className="text-5xl font-bold py-8">$265</h2>
          <button className="bg-black text-[#f5ba6e] lg:w-2/3 h-16 lg:px-0 px-8 text-lg outline-none rounded-md border-none cursor-pointer">
            ADD TO CART
          </button>
        </div>
      </div>
      <section className="background relative py-32 overflow-x-clip">
        <div className="max-w-[1600px] mx-auto flex items-center">
          <div className="lg:ml-[10%] lg:px-0 px-4">
            <h2 className="lg:text-4xl font-semibold font-poppins py-8">
              Buy The adidas Alphabounce Now!
            </h2>
            <p className="font-semibold leading-8 text-[17px] lg:w-2/3">
              The company was started by Adolf Dassler in his mother's house
              <br />
              he was joined by his elder brother Rudolf in 1924 under the foot
              name Dassler Brothers Shoe Factory.
            </p>
            <button className="bg-black text-[#f5ba6e] mt-8 lg:w-1/3 h-16 lg:px-0 px-8 text-lg outline-none rounded-md border-none cursor-pointer">
              SHOP NOW
            </button>
          </div>
          <div className="xl:w-[70rem] lg:w-[50rem] w-[30rem] absolute lg:-bottom-24 -bottom-8 lg:-right-56 right-0">
            <img src="/Main2.png" alt="adidas shoe1" className="w-full" />
          </div>
        </div>
      </section>
      <section
        className="bg-[#f9f9f9] xl:px-[10%] lg:px-4 lg:py-40 py-16"
        id="colors"
      >
        <div className="max-w-[1600px] mx-auto lg:flex pr-8 lg:px-0 px-8 gap-x-8">
          <div className="lg:w-96">
            <h2 className="lg:text-5xl font-poppins font-semibold">
              Colors Available
            </h2>
            <p className="font-semibold leading-8 text-[17px] py-8">
              The company was started by Adolf Dassler in his mother's house he
              is was joined there feet.
            </p>
            <span className="flex gap-x-4 mt-8">
              <button className="bg-black rounded-full border-none outline-none cursor-pointer w-12 h-12">
                <IoIosArrowBack className="text-2xl text-[#f5ba6e] " />
              </button>
              <button className="bg-black rounded-full border-none outline-none cursor-pointer w-12 h-12">
                <IoIosArrowForward className="text-2xl text-[#f5ba6e] " />
              </button>
            </span>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 w-full lg:pt-0 pt-12">
            <div className="lg:w-full bg-white px-4 py-8 relative overflow-hidden">
              <img src="/Main.png" alt="" className="w-full" />
              <p className="text-2xl font-poppins font-semibold pb-12">
                Air Retront 1 Retro High Pine Golden
              </p>
              <span className="flex justify-between items-center">
                <p className="text-3xl font-semibold font-poppins">$265</p>
                <button className="bg-black w-12 h-12 rounded-md outline-none border-none cursor-pointer">
                  <HiPlus className="text-3xl text-[#f5ba6e]" />
                </button>
              </span>
              <img
                src="/logo-black.png"
                alt="logo image"
                className="absolute bottom-0 w-full h-1/2 opacity-5 flip_image"
              />
            </div>
            <div className="lg:w-full bg-white px-4 py-8 relative overflow-hidden">
              <img src="/green_shoe.png" alt="" className="flip_image w-full" />
              <p className="text-2xl font-poppins font-semibold pb-12">
                Air Retront 1 Retro High Pine Green
              </p>
              <span className="flex justify-between items-center">
                <p className="text-3xl font-semibold font-poppins">$265</p>
                <button className="bg-black w-12 h-12 rounded-md outline-none border-none cursor-pointer">
                  <HiPlus className="text-3xl text-[#f5ba6e]" />
                </button>
              </span>
              <img
                src="/logo-black.png"
                alt="logo image"
                className="absolute bottom-0 w-full h-1/2 opacity-5 flip_image"
              />
            </div>
            <div className="lg:w-full bg-white px-4 py-8 relative overflow-hidden">
              <img src="/red_shoe.png" alt="" className="flip_image w-full" />
              <p className="text-2xl font-poppins font-semibold pb-12">
                Air Retront 1 Retro High Pine Red
              </p>
              <span className="flex justify-between items-center">
                <p className="text-3xl font-semibold font-poppins">$265</p>
                <button className="bg-black w-12 h-12 rounded-md outline-none border-none cursor-pointer">
                  <HiPlus className="text-3xl text-[#f5ba6e]" />
                </button>
              </span>
              <img
                src="/logo-black.png"
                alt="logo image"
                className="absolute bottom-0 w-full h-1/2 opacity-5 flip_image"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}