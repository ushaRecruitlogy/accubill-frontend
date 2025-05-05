import React, { useEffect, useState } from "react";
import UserEmails from "./Useremails";
import MobileNumbers from "./MobileNumbers";

const Personal = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [profile, setProfile] = useState({
    fullName: "",
    displayName: "",
    email: "",
    gender: "",
    country: "",
    state: "",
    language: "",
    timeZone: "",
  });

  const [tempProfile, setTempProfile] = useState(profile);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    if (storedUserData) {
      // If user data exists, map it properly to profile fields
      setProfile({
        fullName: storedUserData.name || "",
        displayName: storedUserData.name || "",
        email: storedUserData.email || "",
        gender: "",
        country: "",
        state: "",
        language: "",
        timeZone: "",
      });
    } else {
      // If no user data found, set empty profile
      setProfile({
        fullName: "",
        displayName: "",
        email: "",
        gender: "",
        country: "",
        state: "",
        language: "",
        timeZone: "",
      });
    }
  }, []);

  const handleSave = () => {
    setProfile(tempProfile);
    localStorage.setItem("profile", JSON.stringify(tempProfile)); // Save updated profile to local storage
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 gap-8">
      {/* Profile Info Box */}
      <style>
        {`
        .fontSize{
             color: #555555;
             font-size: 0.8rem;
            font-weight: 400;
    }
    
    .headingFont{
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;  
            color: #555555;
    }`}
      </style>
      <div className="relative w-full max-w-5xl rounded-md bg-gray-50 p-8 shadow-md">
        <button
          className="absolute top-4 right-4 bg-[var(--color-red)] text-white px-4 py-2 rounded hover:bg-indigo-600"
          onClick={() => {
            setTempProfile(profile); // reset temp data each time
            setShowEditModal(true);
          }}
        >
          Edit
        </button>
        <h2 className="headingFont mb-8">Profile Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 fontSize">
          <div className="fontSize">Full Name: {profile.fullName}</div>
          <div className="fontSize">Display Name: {profile.displayName}</div>
          <div className="fontSize">Email: {profile.email}</div>
          <div className="fontSize">Gender: {profile.gender}</div>     
          <div className="fontSize">Country/Region: {profile.country}</div>
          <div className="fontSize">State: {profile.state}</div>
          <div className="fontSize">Language: {profile.language}</div>
          <div className="fontSize">Time Zone: {profile.timeZone}</div>
        </div>
      </div>

      {/* Email Section Box */}
      <div className="w-full max-w-5xl rounded-md bg-gray-100 p-8 shadow-md">
        <UserEmails />
      </div>

      <div className="w-full max-w-5xl rounded-md bg-gray-100 p-8 shadow-md">
        <MobileNumbers />
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-transparent">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
            <h3 className="headingFont mb-4">
              Edit Profile Information
            </h3>
            <div className="grid fontSize grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(tempProfile).map(([key]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 fontSize rounded"
                    value={tempProfile[key]}
                    onChange={(e) =>
                      setTempProfile({ ...tempProfile, [key]: e.target.value })
                    }
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <button
                className="bg-gray-200  text-gray-600 px-4 py-2 rounded"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-[var(--color-red)] text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Personal;
