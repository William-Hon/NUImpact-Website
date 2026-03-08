import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ logoColor }) => {
  const [onHero, setOnHero] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOnHero(window.scrollY < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup function to ensure scroll is restored if component unmounts
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const linkClass = ({ isActive }) =>
    `px-4 py-2 text-xl font-medium text-white transition hover:opacity-80 ${isActive ? "font-bold" : ""
    }`;

  return (
    <nav
      className={`fixed top-0 py-4 w-full z-50 transition-colors duration-300 ${isMobileMenuOpen ? 'bg-[var(--color-nuimpact-darker-blue)]' : 'bg-black/25 backdrop-blur-[2px] backdrop-saturate-125'}`}
    >
      <div className="w-full px-10">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}

            <NavLink className="flex flex-shrink-0 items-center mr-2 z-50 relative" to="/">
              <img className="h-10 md:h-14 w-auto" src="/assets/images/nuimpact-logo.png" alt="NUImpact Logo" />
              <span className="text-xl md:text-3xl font-bold ml-2 text-white">
                NUImpact
              </span>
            </NavLink>
            <div className="ml-auto flex items-center">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white z-50 p-2 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <FiX size={32} /> : <FiMenu size={32} />}
              </button>

              {/* Desktop Menu */}
              <div className="hidden md:block md:ml-auto">
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
                      <div className="z-50 bg-white shadow-lg">
                        <NavLink
                          to="/our-story"
                          className="block px-6 py-3 text-lg text-black hover:bg-gray-100"
                        >
                          Our Story
                        </NavLink>
                        <NavLink
                          to="/our-team"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
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
                      <div className="z-50 bg-white shadow-lg">
                        <NavLink
                          to="/investment-thesis"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
                        >
                          Investment Thesis
                        </NavLink>
                        <NavLink
                          to="/portfolio"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
                        >
                          Portfolio
                        </NavLink>
                        <NavLink
                          to="/summit"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
                        >
                          Summit
                        </NavLink>
                        <NavLink
                          to="/our-impact"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
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
                      <div className="z-50 bg-white shadow-lg">
                        <NavLink
                          to="/student-experience"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
                        >
                          Student Experience
                        </NavLink>
                        <NavLink
                          to="/faq"
                          className="z-50 block px-6 py-3 text-lg text-black hover:bg-gray-100"
                        >
                          FAQ
                        </NavLink>
                      </div>
                    </div>
                  </div>
                  <NavLink to="/donate" className={({ isActive }) => `px-4 py-2 text-xl font-medium text-white transition hover:opacity-80 ${isActive ? "font-bold" : ""} md:!ml-0`}>
                    Donate
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          <div
            className={`fixed inset-0 bg-[var(--color-nuimpact-darker-blue)] z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-40 px-10 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="flex flex-col space-y-6">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white font-bold border-b border-white/20 pb-2">Home</NavLink>

              <div className="flex flex-col space-y-3">
                <span className="text-white/60 text-sm uppercase tracking-wider">About</span>
                <NavLink to="/our-story" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Our Story</NavLink>
                <NavLink to="/our-team" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Our Team</NavLink>
              </div>

              <div className="flex flex-col space-y-3">
                <span className="text-white/60 text-sm uppercase tracking-wider">Our Work</span>
                <NavLink to="/investment-thesis" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Investment Thesis</NavLink>
                <NavLink to="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Portfolio</NavLink>
                <NavLink to="/summit" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Summit</NavLink>
                <NavLink to="/our-impact" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Our Impact</NavLink>
              </div>

              <div className="flex flex-col space-y-3">
                <span className="text-white/60 text-sm uppercase tracking-wider">Get Involved</span>
                <NavLink to="/student-experience" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">Student Experience</NavLink>
                <NavLink to="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-xl text-white pl-4">FAQ</NavLink>
              </div>
              <NavLink to="/donate" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl text-white font-bold border-b border-white/20 pb-2">Donate</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
