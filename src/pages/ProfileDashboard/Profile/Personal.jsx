import React, { useEffect, useState } from 'react';
import UserEmails from './Useremails';
import MobileNumbers from './MobileNumbers';

const Personal = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [profile, setProfile] = useState({
    fullName: '',
    displayName: '',
    email: '',
    gender: '',
    country: '',
    state: '',
    language: '',
    timeZone: '',
  });

  const [tempProfile, setTempProfile] = useState(profile);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
    if (storedUserData) {
      // If user data exists, map it properly to profile fields
      setProfile({
        fullName: storedUserData.name || '',
        displayName: storedUserData.name || '',
        email: storedUserData.email || '',
        gender: '',
        country: '',
        state: '',
        language: '',
        timeZone: '',
      });
    } else {
      // If no user data found, set empty profile
      setProfile({
        fullName: '',
        displayName: '',
        email: '',
        gender: '',
        country: '',
        state: '',
        language: '',
        timeZone: '',
      });
    }
  }, []);
  

  const handleSave = () => {
    setProfile(tempProfile);
    localStorage.setItem('profile', JSON.stringify(tempProfile)); // Save updated profile to local storage
    setShowEditModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-8 gap-8">
      {/* Profile Info Box */}
      <div className="relative w-full max-w-5xl rounded-md bg-gray-50 p-8 shadow-md">
        <button
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          onClick={() => {
            setTempProfile(profile); // reset temp data each time
            setShowEditModal(true);
          }}
        >
          Edit
        </button>
        <h2 className="text-3xl font-bold text-gray-500 mb-8">Profile Information</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-gray-400 " style={{ fontWeight: 100 }}>
<div>Full Name: {profile.fullName}</div>
<div>Display Name: {profile.displayName}</div>
<div>Email: {profile.email}</div>
<div>Gender: {profile.gender}</div>
<div>Country/Region: {profile.country}</div>
<div>State: {profile.state}</div>
<div>Language: {profile.language}</div>
<div>Time Zone: {profile.timeZone}</div>
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
            <h3 className="text-xl font-semibold mb-4">Edit Profile Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(tempProfile).map(([key,]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
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
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                onClick={() => setShowEditModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
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
