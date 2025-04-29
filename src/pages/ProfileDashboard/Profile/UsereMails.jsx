import React, { useState } from "react";
import { FiMail, FiTrash2 } from "react-icons/fi";

const UserEmails = () => {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");

  const handleAddEmail = () => {
    // You can handle the OTP logic here
    alert(`OTP will be sent to: ${email}`);
    setShowModal(false);
    setEmail("");
  };

  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-gray-500 mb-4">
        My Email Addresses
      </h3>
      <p className="text-sm text-gray-400 mb-6">
        You can use the following email addresses to sign in to your account and
        also to reset your password if you ever forget it.
      </p>

      <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md text-gray-700 shadow-sm">
        <div className="flex items-center gap-3">
          <FiMail className="text-red-500 text-5xl" />
          <div>
            <p className="font-medium  text-gray-400">moreshwarrecruitlogy@gmail.com</p>
            <p className="text-sm text-gray-400">1 day ago</p>
          </div>
        </div>
        <FiTrash2 className="text-red-500 hover:text-red-600 cursor-pointer text-xl" />
      </div>

      <p
        className="text-sm text-red-500 text-center  mt-6 cursor-pointer underline"
        onClick={() => setShowModal(true)}
      >
        + Add Email Address
      </p>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center  z-50  backdrop-blur-md  bg-opacity-20">
          {/* backdrop-blur-md  */}

          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="text-lg font-semibold mb-4">Add Email Address</h4>
            <p className="text-sm text-gray-600 mb-4">
              A one-time password (OTP) will be sent to your email address.
            </p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>

              <button
                onClick={handleAddEmail}
                className="px-4 py-2 bg-red-500 text-white rounded hover:opacity-90"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEmails;
