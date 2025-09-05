import { useState } from "react";
import { Send, PenSquare, Settings, LogOut } from "lucide-react"; 
import MainHeader from "./MainHeader";
import lang from "./LanguageSelector";
import { useSelector } from "react-redux";

const GptSearch = () => {
  const langKey = useSelector((store)=>store.config?.lang);
  const [messages, setMessages] = useState([]); // start with empty chat
  const [input, setInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", content: input }]);
    setInput("");
  };

  const isEmptyChat = messages.length === 0;

  return (
    <div className="h-screen flex flex-col">
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">
        <MainHeader />
      </div>

      <div className="flex pt-16 h-screen bg-gray-300 text-white">
        {/* Left Sidebar */}
        <aside className="w-64 bg-black flex flex-col">
          <button className="flex items-center space-x-2 hover:bg-gray-700 hover:rounded-lg px-4 py-2 m-4 font-medium">
            <PenSquare size={18} />
            <span>{lang[langKey].New_Chat}</span>
          </button>

          <div className="flex-1 overflow-y-scroll custom-scrollbar p-4 space-y-2">
            <div className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg">
              {lang[langKey].Chat_with_GPT}
            </div>
            <div className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg">
              {lang[langKey].My_Projects}
            </div>
            <div className="p-2 cursor-pointer hover:bg-gray-700 hover:rounded-lg">
              {lang[langKey].Coding_Help}
            </div>
          </div>

          {/* User Profile Bottom */}
          <div className="relative border-t border-gray-800">
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center space-x-3 p-4 w-full hover:bg-gray-700"
            >
              <img
                src="/profile.png"
                alt="User"
                className="w-10 h-10 rounded-full border border-gray-700"
              />
              <div className="text-left">
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-xs text-gray-400">Pro User</p>
              </div>
            </button>

            {showMenu && (
              <div className="absolute bottom-16 left-4 bg-[#2b2b2b] border border-gray-700 rounded-lg shadow-lg w-48 z-50">
                <button className="flex items-center space-x-2 w-full hover:bg-gray-700 px-4 py-2 rounded-t-lg">
                  <Settings size={18} />
                  <span>Settings</span>
                </button>
                <button className="flex items-center space-x-2 w-full hover:bg-gray-700 px-4 py-2 rounded-b-lg">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </aside>

        {/* Main Chat Section */}
        <div className="flex flex-col flex-1 bg-[#1a1a1a]">
          {/* Chat Messages */}
          <main className="flex-1 overflow-y-scroll flex justify-center">
            <div className="w-full max-w-3xl px-6 py-6 space-y-4 flex flex-col">
              {isEmptyChat ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center text-gray-400 text-xl">
                  <p>{lang[langKey].Chat_message}</p>
                </div>
              ) : (
                messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-green-600 ml-auto text-white max-w-[80%]"
                        : "bg-gray-800 mr-auto text-gray-200 max-w-[80%]"
                    }`}
                  >
                    {msg.content}
                  </div>
                ))
              )}
            </div>
          </main>

          {/* Input Bar */}
          <div
            className={`p-4 flex justify-center ${
              isEmptyChat ? "flex-1 items-center" : "sticky bottom-0 bg-[#1a1a1a]"
            }`}
          >
            <div className="flex items-center bg-black rounded-full px-4 py-2 w-full max-w-3xl border border-green-600">
              <input
                type="text"
                placeholder={lang[langKey].gptSearchPlaceholder}
                className="flex-1 bg-transparent outline-none text-white p-4 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-2 text-green-600 hover:text-green-400"
              >
                <Send size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GptSearch;
