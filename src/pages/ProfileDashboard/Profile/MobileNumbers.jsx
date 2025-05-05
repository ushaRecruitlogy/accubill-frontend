import React, { useState } from "react";
import { FaMobileRetro } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

const MobileNumbers = () => {
  const [mobileList, setMobileList] = useState([
    { number: "123456789", addedAt: "1 day ago" },
  ]);
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const handleSendOtp = () => {
    if (!mobile || mobile.length < 10) {
      toast.error("Enter a valid mobile number");
      return;
    }
    setShowMobileModal(false);
    setShowOtpModal(true);
    toast.info(`OTP sent to ${mobile}`);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      const newEntry = { number: mobile, addedAt: "Just now" };
      setMobileList([newEntry, ...mobileList]);
      setMobile("");
      setOtp("");
      setShowOtpModal(false);
      toast.success("Mobile number added successfully!");
    } else {
      toast.error("Invalid OTP");
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...mobileList];
    updatedList.splice(index, 1);
    setMobileList(updatedList);
    toast.info("Mobile number removed");
  };

  return (
    <>
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

      <div className="mt-10 text-gray-400">
        <h3 className="headingFont text-gray-500 mb-4">My Mobile Number</h3>
        <p className="fontSize text-gray-400 mb-6">
          You can use the following Mobile no to sign in to your account and also to reset your password if you ever forget it.
        </p>

        {mobileList.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-gray-100 p-4 rounded-md text-gray-700 shadow-sm mb-3"
          >
            <div className="flex items-center gap-3">
              <FaMobileRetro className="text-[var(--color-red)] text-4xl" />
              <div>
                <p className="fontSize">{item.number}</p>
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
          onClick={() => setShowMobileModal(true)}
        >
          + Add Mobile Number
        </p>

        {/* Mobile Modal */}
        {showMobileModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-20">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h4 className="headingFont mb-4">Add Mobile Number</h4>
              <p className="fontSize mb-4">
                Enter new  mobile number.
              </p>
              <input
                type="text"
                placeholder="Enter your Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full p-2 border border-gray-300 fontSize rounded mb-4"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowMobileModal(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendOtp}
                  className="bg-[var(--color-red)] text-white px-4 py-2 rounded"
                >
                  Send OTP
                </button>
              </div>
            </div>
          </div>
        )}

        {/* OTP Modal */}
        {showOtpModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-opacity-20">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h4 className="headingFont mb-4">OTP Verification</h4>
              <p className="fontSize mb-4">
                Enter the 6-digit OTP sent to <strong>{mobile}</strong>
              </p>
              <input
                type="text"
                maxLength={6}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-2 border border-gray-300 fontSize rounded mb-4"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowOtpModal(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleVerifyOtp}
                  className="bg-[var(--color-blue)] text-white px-4 py-2 rounded"
                >
                  Verify OTP
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileNumbers;
