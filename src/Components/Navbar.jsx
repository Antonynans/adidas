import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => {
    setDropdown(!dropdown);
  };

  // const navigate = useNavigate();

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent background lg:absolute fixed z-20">
      <div className="max-w-[1600px] lg:w-4/5 w-full mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center">
          <div className="flex flex-col gap-y-4 lg:w-1/3">
            <span className="flex items-center gap-x-2 font-bold text-2xl">
              {/* <h1 className="text-white text-3xl">
                GOTO
                <span className="text-[#ce8a5c]">EGYPT.</span>
              </h1> */}
              <img src="/logo-black.png" alt="logo" className="w-16" />
            </span>
          </div>
          <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
            <a
              href="#home"
              className="leading-normal no-underline text-[#8b6c47]"
            >
              Home
            </a>
            <a
              href="#about"
              className="leading-normal no-underline text-[#8b6c47]"
            >
              About
            </a>
            <a
              href="#colors"
              className="leading-normal no-underline text-[#8b6c47]"
            >
              Colors
            </a>
            <a
              href="#features"
              className="leading-normal no-underline text-[#8b6c47]"
            >
              Features
            </a>
            <a
              href="#cart"
              className="leading-normal no-underline text-[#8b6c47]"
            >
              Cart
            </a>
          </ul>

          {dropdown ? (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black "
              onClick={showDropdown}
            >
              <MdClose />
            </div>
          ) : (
            <div
              className="lg:hidden text-[22px] cursor-pointer text-black "
              onClick={showDropdown}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>

        {dropdown ? (
          <div
            className="lg:hidden w-full h-[100vh] fixed top-24 background bg-cover ease-in-out duration-100 "
            onClick={showDropdown}
          >
            <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4">
              <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                <a
                  href="#home"
                  className="leading-normal no-underline text-[#8b6c47]"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="leading-normal no-underline text-[#8b6c47]"
                >
                  About
                </a>
                <a
                  href="#colors"
                  className="leading-normal no-underline text-[#8b6c47]"
                >
                  Colors
                </a>
                <a
                  href="#features"
                  className="leading-normal no-underline text-[#8b6c47]"
                >
                  Features
                </a>
                <a
                  href="#cart"
                  className="leading-normal no-underline text-[#8b6c47]"
                >
                  Cart
                </a>
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
