import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoTitle = ({ title, overview }) => {
  const [showInfo, setShowInfo] = useState(false);
  const moreInfoHandle = () => {
    if(!showInfo){
      setShowInfo(true);
    }
    else{
      setShowInfo(false);
    }
  };
  return (
    <div className='px-20 w-1/2 text-white'>
      {/* Title */}
      <motion.h1
        className="text-6xl font-bold my-4"
        animate={{ y: showInfo ? -10 : 0 }} // thoda upar move kare
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {title}
      </motion.h1>
      {/* Overview (only when showInfo = true) */}
      <AnimatePresence>
        {showInfo && (
          <motion.p
            className="py-6 text-md w-3/4 whitespace-pre-line"
            initial={{ opacity: 0, y: -10 }}   // hidden state
            animate={{ opacity: 1, y: 0 }}     // visible state
            exit={{ opacity: 0, y: -10 }}      // exit animation
            transition={{ duration: 0.4 }}
          >
            {overview}
          </motion.p>
        )}
      </AnimatePresence>
    <div className="flex space-x-4">
      {/* Play Button */}
     <button className="bg-gray-200 text-black font-bold rounded-md py-2 px-4 w-36 flex items-center justify-center gap-2 hover:bg-gray-300 transition">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"
         className="h-7 w-7 fill-current text-[red]">
       <path d="M320-200v-560l440 280-440 280Z"/>
      </svg>
      <span className="leading-none">Play</span>
    </button>

       {/* More Info Button */}
      <button className="bg-[gray] bg-opacity-35 text-white font-bold rounded-md py-2 px-4 w-36 flex items-center justify-center gap-2 hover:bg-gray-400 hover:text-black transition" onClick={moreInfoHandle}>
       <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
      <span className="leading-none">More Info</span>
     </button>
</div>

    </div>
  )
};

export default VideoTitle;