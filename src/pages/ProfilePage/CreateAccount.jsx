import React from 'react';
import UploadImageBox from './UploadImageBox';

const CreateAccount = () => {

  <style>
  {`
    .w-full{
     size: 70%;
    }
  `}
</style>
  return (
    
    <div className="min-h-screen bg-gray-50 p-8">
       <style>
        {`
          .custom-w-full .w-full {
            width: 70%;
            font-size: 14px;
            font-weight: 300;
            line-height: 24px;  
            color: #000000;
          },
          .custom-w-full .text-gray-700 {
           font-weight: 300;
        }
           
        .text-gray-500 {
    font-weight: 630 !important;
    color: oklch(0.35 0 0);
}
        
        `}
      </style>

      <div className="custom-w-full">
       
      <h1 className="text-1xl text-gray-500 mb-6">Create Account</h1>

      {/* Account Image */}
      <div className="mb-10">
        <UploadImageBox />
      </div>

      {/* Account Information */}
      <div className="bg-white p-6 rounded-md shadow-md mb-8">
        <h2 className="text-1xl text-gray-500 mb-4">Account Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Owner</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" defaultValue="moreshwar satpute" disabled />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Account Name</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Account Site</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Parent Account</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Account Number</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Account Type</label>
              <select className="mt-1 w-full border border-gray-300 rounded p-2">
                <option>-None-</option>
                <option>Customer</option>
                <option>Partner</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Industry</label>
              <select className="mt-1 w-full border border-gray-300 rounded p-2">
                <option>-None-</option>
                <option>IT</option>
                <option>Finance</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Annual Revenue</label>
              <input type="number" className="mt-1 w-full border border-gray-300 rounded p-2" placeholder="$" />
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating</label>
              <select className="mt-1 w-full border border-gray-300 rounded p-2">
                <option>-None-</option>
                <option>Hot</option>
                <option>Warm</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Fax</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Website</label>
              <input type="url" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ticker Symbol</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Ownership</label>
              <select className="mt-1 w-full border border-gray-300 rounded p-2">
                <option>-None-</option>
                <option>Private</option>
                <option>Public</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Employees</label>
              <input type="number" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">SIC Code</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="bg-white p-6 rounded-md shadow-md mb-8">
        <h2 className="text-1xl text-gray-500 mb-4">Address Information</h2>

        <div className="flex justify-end mb-2">
          <button className="bg-[var(--color-blue)] text-white px-4 py-2 rounded hover:bg-[var(--color-blue)]">Copy Address</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {/* Billing Address Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing Street</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing City</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing State</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing Code</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Billing Country</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Shipping Address Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping Street</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping City</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping State</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping Code</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Shipping Country</label>
              <input type="text" className="mt-1 w-full border border-gray-300 rounded p-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl text-gray-500 mb-4">Description Information</h2>
        <textarea className="w-150 h-15 border border-gray-300 rounded p-2"></textarea>
      </div>
      </div>
    </div>
  );
};

export default CreateAccount;
