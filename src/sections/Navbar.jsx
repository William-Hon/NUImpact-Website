import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = ({ logoColor }) => {
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOnHero(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-xl font-medium text-white transition hover:opacity-80 ${isActive ? "font-bold" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 py-4 w-full z-50 transition-colors duration-300 ${onHero
        ? "bg-black/25 backdrop-blur-[2px] backdrop-saturate-125 "
        : "bg-[var(--color-nuimpact-blue)]"
        }`}
    >
      <div className="w-full px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}

            <NavLink className="flex flex-shrink-0 items-center mr-2" to="/">
              <img className="h-14 w-auto" src="/assets/images/nuimpact-logo.png" alt="NUImpact Logo" />
              <span className="hidden md:block text-3xl font-bold ml-2 text-white">
                NUImpact
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-8 items-center">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                {/* About Button Dropdown */}
                <div className="relative group flex items-center">
                  <span className="px-4 py-2 text-xl font-medium text-white cursor-pointer">
                    About
                  </span>

                  <div
                    className="
                      absolute right-0 top-full w-max
                      pt-2
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-200
                    "
                  >
                    <div className=" bg-white shadow-lg">
                      <NavLink
                        to="/our-story"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Our Story
                      </NavLink>
                      <NavLink
                        to="/our-team"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Our Team
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* Our Work Button Dropdown */}
                <div className="relative group flex items-center">
                  <span className="px-4 py-2 text-xl font-medium text-white cursor-pointer">
                    Our Work
                  </span>

                  <div
                    className="
                      absolute right-0 top-full w-max
                      pt-2
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-200
                    "
                  >
                    <div className="bg-white shadow-lg">
                      <NavLink
                        to="/investment-thesis"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Investment Thesis
                      </NavLink>
                      <NavLink
                        to="/portfolio"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Portfolio
                      </NavLink>
                      <NavLink
                        to="/summit"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Summit
                      </NavLink>
                      <NavLink
                        to="/our-impact"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Our Impact
                      </NavLink>
                    </div>
                  </div>
                </div>
                {/* Get Involved Button Dropdown */}
                <div className="relative group flex items-center">
                  <span className="px-4 py-2 text-xl font-medium text-white cursor-pointer">
                    Get Involved
                  </span>

                  <div
                    className="
                      absolute right-0 top-full w-max
                      pt-2
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-opacity duration-200
                    "
                  >
                    <div className="bg-white shadow-lg">
                      <NavLink
                        to="/student-experience"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Student Experience
                      </NavLink>
                      <NavLink
                        to="/faq"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        FAQ
                      </NavLink>
                      <NavLink
                        to="/donate"
                        className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                      >
                        Donate
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
