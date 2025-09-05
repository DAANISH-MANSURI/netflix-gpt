import { useEffect, useState } from "react";
import inflixLogo from "../images/INFLIX_LOGO1.png";
import Accordion from "./Accordion";
import { toggleGptSearchView } from "../utils/gptSlice";
import { useDispatch, useSelector } from "react-redux";
import { Languages, Store } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const MainHeader = () => {
  const showGptSearch = useSelector((Store)=>Store.gpt?.showGptSearch);
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch();

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
  const toggleGpt = () => {
    // Logic to toggle GPT
    dispatch(toggleGptSearchView());
  };

  const [showLangOptions, setShowLangOptions] = useState(false);
  const handleLanguageChange = (e) =>{
    //console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

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
        <a href="/browse" className="hover:text-gray-300">Home</a>
        <a href="/tv" className="hover:text-gray-300">TV Shows</a>
        <a href="/movies" className="hover:text-gray-300">Movies</a>
        <a href="/new" className="hover:text-gray-300">New & Popular</a>
        <a href="/mylist" className="hover:text-gray-300">My List</a>
      </nav>
      {/* Gpt Button */}

      {/* Right side */}
      <div className="flex justify-between items-center gap-6 w-fit">
        {showGptSearch && (
         <div className="relative">
          <Languages
            size={20}
            className="cursor-pointer hover:text-red-200"
            onClick={() => setShowLangOptions((prev) => !prev)}
          />
          {showLangOptions && (
            <select
              className="absolute top-8 left-0 bg-black text-white text-sm border rounded"
              defaultValue="en"
              onBlur={() => setShowLangOptions(false)}
              onClick={handleLanguageChange}
            >
              <div className="max-h-40 overflow-y-auto bg-black/50">
              {
                
                /* Map through supported languages */
                SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))
              }
              </div>
            </select>
          )}
         </div>
        )}

        <div>
          <button className="bg-white/80 text-black px-4 py-2 rounded-full font-semibold" onClick={toggleGpt}>INFLIX GPT</button>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
