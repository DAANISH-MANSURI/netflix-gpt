import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { CLOUDINARY_IMG_URL } from "../utils/constants";

const CLOUDINARY_URL = { CLOUDINARY_IMG_URL };
const UPLOAD_PRESET = "unsigned_preset";

const UpdateProfile = ({ onClose }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleUpdate = async () => {
    setLoading(true);
    try {
      let photoURL = user?.photoURL;

      // Agar image select ki hai to Cloudinary pe upload karo
      if (photo) {
        const formData = new FormData();
        formData.append("file", photo);
        formData.append("upload_preset", UPLOAD_PRESET);

        const res = await fetch(CLOUDINARY_URL, {
          method: "POST",
          body: formData,
        });
        const data = await res.json();
        photoURL = data.secure_url; // Cloudinary se URL
      }

      // Firebase user profile update
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });

      // Redux store update
      dispatch(
        addUser({
          uid: auth.currentUser.uid,
          email: auth.currentUser.email,
          displayName: name,
          photoURL: photoURL,
        })
      );

      onClose();
    } catch (err) {
      console.error("Profile update failed", err);
      alert("Profile update failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/70">
      <div className="bg-black/60  p-6 rounded-lg shadow-lg w-96 h-80 space-y-8">
        <h1 className="text-2xl font-bold mb-4 text-[red]">Update Profile</h1>
        <div className="input-wrapper rounded">
        <input
          type="text"
          className="w-full p-3 rounded bg-zinc-800/80 
                   text-white placeholder-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-red-600"
          placeholder="Enter new name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
         className="mb-3 file:bg-red-700 file:text-white file:px-4 file:py-2 file:rounded-lg file:border-0 file:cursor-pointer"
        />

        <div className="flex justify-between">
          <button
            onClick={handleUpdate}
            className="bg-red-700 text-white px-4 py-2 rounded"
          >
            Update
          </button>
          <button
            onClick={onClose}
            className="bg-red-700 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;