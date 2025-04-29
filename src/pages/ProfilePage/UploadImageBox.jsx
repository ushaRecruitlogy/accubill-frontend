import React, { useRef } from "react";

const UploadImageBox = () => {
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click(); // Open the hidden file input
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // You can also preview the image here if you want
    }
  };

  return (
    <div className="mb-10">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />
      <div
        onClick={handleDivClick}
        className="w-24 h-24 bg-gray-300 rounded flex items-center justify-center cursor-pointer hover:bg-gray-400 transition"
      >
        <span className="text-gray-500">Image</span>
      </div>
    </div>
  );
};

export default UploadImageBox;
