import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Optional: sticky + close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Explore", to: "/explore"},
    { name: "Add Spot", to: "/addSpot"},
    { name: "My List", to: "/myList" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact"},
  ];

  const navLinks = navItems.map((item) => (
    <li key={item.name}>
      <NavLink
        to={item.to}
        className={({ isActive }) =>
          `relative px-2 py-1 transition-all duration-300 ${
            isActive
              ? "text-blue-500 font-bold before:w-full"
              : "hover:text-blue-500 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-blue-500 before:transition-all before:duration-300 hover:before:w-full"
          } before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:bg-gradient-to-r before:from-green-400 before:to-blue-500 before:transition-all before:duration-300`
        }
      >
        {item.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-base-100 sticky top-0 z-50 shadow-md">
      <div className="max-w-auto mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-12 h-12 rounded-full border-2 border-green-500"
            src="/main_logo.png"
            alt="Logo"
          />
          <span className="font-bold text-xl text-gray-800">TourAvels</span>
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-6 text-lg">{navLinks}</ul>

        {/* Auth buttons / mobile toggle */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline font-medium">{user.displayName}</span>
              <button
                onClick={logout}
                className="btn btn-sm btn-error text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex gap-2">
              <NavLink to="/login" className="btn btn-sm btn-success text-white hover:bg-green-600">
                Login
              </NavLink>
              <NavLink to="/register" className="btn btn-sm btn-info text-white hover:bg-cyan-600">
                Register
              </NavLink>
            </div>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden btn btn-ghost p-2"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-2 pb-4 border-t border-gray-200">
          <ul className="flex flex-col gap-3">{navLinks}</ul>
          <div className="flex flex-col gap-2 mt-4">
            {user ? (
              <>
                <span className="font-medium">{user.displayName}</span>
                <button
                  onClick={logout}
                  className="btn btn-sm btn-error text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-sm btn-success text-white w-full hover:bg-green-600">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-sm btn-info text-white w-full hover:bg-cyan-600">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
