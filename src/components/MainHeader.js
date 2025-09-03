import { useEffect, useState } from "react";
import inflixLogo from "../images/INFLIX_LOGO1.png";
import Accordion from "./Accordion";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-screen z-50 flex justify-between items-center px-8 py-4 transition-colors duration-500 ${
        isScrolled ? "bg-gradient-to-b from-black/80 to-transparent text-white" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      {/* Logo */}
      <div>
        <img className="w-32 cursor-pointer" src={inflixLogo} alt="Inflix Logo" />
      </div>

      {/* Navigation */}
      
      <nav className="flex gap-6 text-sm font-medium">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/tv" className="hover:text-gray-300">TV Shows</a>
        <a href="/movies" className="hover:text-gray-300">Movies</a>
        <a href="/new" className="hover:text-gray-300">New & Popular</a>
        <a href="/mylist" className="hover:text-gray-300">My List</a>
      </nav>
      
      {/* Right side */}
      <div className="flex items-center gap-6">
        <Accordion />
      </div>
    </header>
  );
};

export default MainHeader;
