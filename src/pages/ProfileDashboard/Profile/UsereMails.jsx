import React, { useState } from "react";
import { FiMail, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

const UserEmails = () => {
  const [emails, setEmails] = useState([
    {
      email: "moreshwarrecruitlogy@gmail.com",
      addedAt: "1 day ago",
    },
  ]);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleAddEmailClick = () => {
    if (!email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    setShowEmailModal(false);
    setShowOtpModal(true);
    toast.info(`OTP sent to: ${email}`);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      const newEmail = {
        email,
        addedAt: "Just now",
      };
      setEmails([newEmail, ...emails]);
      setShowOtpModal(false);
      setEmail("");
      setOtp("");
      toast.success(`Email "${email}" added successfully!`);
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const handleDelete = (index) => {
    const updated = [...emails];
    updated.splice(index, 1);
    setEmails(updated);
    toast.info("Email removed");
  };

  return (
    <div className="mt-10">
      <style>
        {`
        .fontSize {
          color: #555555;
          font-size: 0.8rem;
          font-weight: 400;
        }
        .headingFont {
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: #555555;
        }
      `}
      </style>

      <h3 className="headingFont mb-4">My Email Addresses</h3>
      <p className="fontSize mb-6">
        You can use the following email addresses to sign in to your account and also to reset your password if you ever forget it.
      </p>

      {emails.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between bg-gray-100 p-4 rounded-md text-gray-700 shadow-sm mb-3"
        >
          <div className="flex items-center gap-3">
            <FiMail className="text-[var(--color-red)] text-3xl" />
            <div>
              <p className="fontSize">{item.email}</p>
              <p className="fontSize">{item.addedAt}</p>
            </div>
          </div>
          <FiTrash2
            className="text-[var(--color-red)] hover:text-[var(--color-blue)] cursor-pointer text-xl"
            onClick={() => handleDelete(idx)}
          />
        </div>
      ))}

      <p
        className="headingFont text-center mt-6 cursor-pointer underline"
        onClick={() => setShowEmailModal(true)}
      >
        + Add Email Address
      </p>

      {/* Email Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="headingFont mb-4">Add Email Address</h4>
            <p className="fontSize mb-4">Enter your email address.</p>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full fontSize p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowEmailModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddEmailClick}
                className="px-4 py-2 bg-[var(--color-red)] text-white rounded hover:opacity-90"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {showOtpModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-opacity-20">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h4 className="headingFont mb-4">OTP Verification</h4>
            <p className="fontSize mb-4">Enter the OTP sent to <strong>{email}</strong></p>
            <input
              type="text"
              placeholder="Enter 6-digit OTP"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full fontSize p-2 border border-gray-300 rounded mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowOtpModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleVerifyOtp}
                className="px-4 py-2 bg-[var(--color-blue)] text-white rounded hover:opacity-90"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserEmails;
