import { useState } from "react";
import inflixsmile from "../images/inflix-smile.jpg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";
const Accordion = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);
  
  const handlesignout = () => {
    signOut(auth).then(() => {
      navigate("/");
    })
   .catch((error) => {
    console.error("Sign-out error:", error);
    });
  };
  const manageProfile = () => {
    setShowUpdateProfile(true);
    setOpen(false); // Accordion band karo jab profile manage kar rahe to
  };

  return (
    <div className="relative w-60 mx-4">
      {/* Profile Image (Trigger) */}
      <div
        className="flex justify-end cursor-pointer"
        onClick={() => setOpen(!open)}
      > <div className="flex space-x-3 items-center">
        <img
          src={inflixsmile}
          alt="Accordion Parent"
          className="w-10 h-10 object-contain"
        />
        <span className="ml-auto">{open ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* Dropdown Content (absolute so it overlaps) */}
      {open && (
        <div className="absolute right-0 mt-2 bg-black/70 rounded shadow-lg z-50 w-fit max-w-xs">
          <div className="px-4 py-3 flex flex-col space-y-2 text-white">
            <div className="flex items-center space-x-3">
              <img
                src={user?.photoURL || inflixsmile} 
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="whitespace-nowrap">{user?.displayName}</p>
            </div>
            <p
              className="hover:underline cursor-pointer"
              onClick={manageProfile}
            >
              Manage Profile
            </p>
            <p className="hover:underline cursor-pointer">Account</p>
            <p className="hover:underline cursor-pointer">Help Center</p>
            <p
              onClick={handlesignout}
              className="hover:underline cursor-pointer"
            >
              Sign out of Inflix
            </p>
          </div>
        </div>
      )}

      {/* UpdateProfile modal */}
      {showUpdateProfile && (
        <UpdateProfile onClose={() => setShowUpdateProfile(false)} />
      )}
    </div>
  );
};

export default Accordion;