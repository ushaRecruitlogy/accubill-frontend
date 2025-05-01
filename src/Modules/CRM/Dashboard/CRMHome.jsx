import React from "react";
import MyPipelineDeals from "./chart/MyPipelineDeals";

const CRMHome = () => {
  return (
    <div className="p-6 ">
      {/* Top 4 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading">My Open Deals</h2>
          <p className="subheading mt-2">8</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading">My Untouched Deals</h2>
          <p className="subheading mt-2">2</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading">My Calls Today</h2>
          <p className="subheading mt-2">0</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading">My Leads</h2>
          <p className="subheading mt-2">4</p>
        </div>
      </div>

      {/* My Open Tasks */}
      <div className="bg-white shadow rounded p-4 mb-6">
        <h2 className="my_heading mb-4">My Open Tasks</h2>
        <div className="overflow-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">Due Date</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Priority</th>
                <th className="p-2 border">Related To</th>
                <th className="p-2 border">Contact Name</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(5)].map((_, i) => (
                <tr key={i} className="hover:bg-red-100">
                  <td className="p-2 itms border">Follow up #{i + 1}</td>
                  <td className="p-2 itms border">2025-05-0{i + 1}</td>
                  <td className="p-2 itms border">Open</td>
                  <td className="p-2 itms border">High</td>
                  <td className="p-2 itms border">Project X</td>
                  <td className="p-2 itms border">John Doe</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* My Meeting & Today's Leads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading mb-4">My Meetings</h2>
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2  border">Title</th>
                <th className="p-2  border">From</th>
                <th className="p-2  border">To</th>
                <th className="p-2  border">Related To</th>
                <th className="p-2  border">Contact Name</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-red-100">
                <td className="p-2 itms border">Strategy Meet</td>
                <td className="p-2 itms border">10:00 AM</td>
                <td className="p-2 itms border">11:00 AM</td>
                <td className="p-2 itms border">Client A</td>
                <td className="p-2 itms border">Jane Smith</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading mb-4">Today's Leads</h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li>Lead 1 - John</li>
            <li>Lead 2 - Alice</li>
            <li>Lead 3 - Rahul</li>
            <li>Lead 4 - Priya</li>
          </ul>
        </div>
      </div>

      {/* Deals Closing This Month & Pipeline Deals Chart */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading mb-4">My Deals Closing This Month</h2>
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2  border">Deal Name</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Stage</th>
                <th className="p-2 border">Closing Date</th>
                <th className="p-2 border">Account Name</th>
                <th className="p-2 border">Contact Name</th>
                <th className="p-2 border">Deal Owner</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-red-100">
                <td className="p-2 itms border">Enterprise Plan</td>
                <td className="p-2 itms border">$5,000</td>
                <td className="p-2 itms border">Negotiation</td>
                <td className="p-2 itms border">2025-04-30</td>
                <td className="p-2 itms border">XYZ Corp</td>
                <td className="p-2 itms border">Michael</td>
                <td className="p-2 itms border">Admin</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white p-4 shadow rounded">
          <h2 className="my_heading mb-4">My Pipeline Deals By Stage</h2>
          <div className="h-64 flex items-center mt-5 justify-center text-gray-400">
            <MyPipelineDeals />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CRMHome;
