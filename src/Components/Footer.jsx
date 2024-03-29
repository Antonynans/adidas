import { IoIosArrowForward } from "react-icons/io";
import { FaGooglePlusG, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-bg xl:px-16 px-8 lg:pt-24 pt-12 pb-8">
      <section className="max-w-[1600px] lg:w-4/5 mx-auto">
        <div className="flex justify-between lg:items-center gap-x-20 flex-wrap max-lg:flex-col pb-12 border-0 border-solid border-b-2 border-b-[#535250]">
          <div className="flex flex-col items-start lg:w-1/5 lg:pb-0 pb-8">
            <a href="/">
              <img
                src="/logo-black.svg"
                alt="footer-logo"
                className="lg:w-2/3 w-16"
              />
            </a>

            <div className="flex items-center gap-5">
              <FaGooglePlusG className="text-4xl text-white" />
              <FaFacebookF className="text-2xl text-white" />
              <FaTwitter className="text-2xl text-white" />
            </div>
          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            <div>
              <h4 className="text-white text-xl leading-normal font-medium mb-6">
                Company
              </h4>
              <ul className="p-0">
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Home
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Features
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Screenshots
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Pricing
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl leading-normal font-medium mb-6">
                Explore
              </h4>
              <ul className="p-0">
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Privacy
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Policy
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Faq
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Terms
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl leading-normal font-medium mb-6">
                Get Started
              </h4>
              <ul className="p-0">
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Order status
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Shipping
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Delivery
                </li>
                <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">
                  Payment
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4">
              <h4 className="text-white text-xl leading-normal font-medium mb-6">
                Subscribe
              </h4>
              <div className="relative h-12 flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full h-full bg-[#fcbd6d] border-none outline-none rounded-md px-4"
                />
                <IoIosArrowForward className="text-2xl absolute text-[#322515] right-0 z-10 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-24 max-sm:flex-col">
          <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
            <p className="text-[#fffc]">© 2024 IsraTech All rights reserved</p>
          </div>
          <p className="cursor-pointer text-[#fffc]">
            +39 02 743 409 12, 560 Mission St, San Francisco CA 94 205, USA
          </p>
        </div>
      </section>
    </footer>
  );
}
