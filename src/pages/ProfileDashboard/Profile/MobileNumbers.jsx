import React, { useState } from 'react';
import { FaMobileRetro } from "react-icons/fa6";
import { FiTrash2 } from 'react-icons/fi';

const MobileNumbers = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="mt-10 text-gray-400  ">
      <h3 className="text-xl font-semibold text-gray-500 mb-4">My Mobile Number</h3>
      <p className="text-sm text-gray-400 mb-6">
        You can use the following Mobile no to sign in to your account and also to reset your password if you ever forget it.
      </p>

      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md text-gray-700 shadow-sm">
        <div className="flex items-center gap-3">
          <FaMobileRetro className="text-red-600 text-5xl" />
          <div>
            <p className="font-medium  text-gray-400 ">123456789</p>
            <p className="text-sm text-gray-400">1 day ago</p>
          </div>
        </div>
        <FiTrash2 className="text-red-500 hover:text-red-600 cursor-pointer text-xl" />
      </div>

      <p
        className="text-sm text-red-500 text-center mt-6 cursor-pointer underline"
        onClick={() => setShowModal(true)}
      >
        + Add Mobile Number
      </p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md  bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="text-lg font-semibold mb-4">Add Mobile Number</h4>
            <p className="text-sm text-gray-600 mb-4">
              A one-time password (OTP) will be sent to your mobile number.
            </p>
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Send OTP
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNumbers;
