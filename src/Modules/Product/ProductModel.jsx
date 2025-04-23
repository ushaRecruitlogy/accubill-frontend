import React, { useState } from "react";

const sidebarItems = [
  "Recent Launches",
  "Sales",
  "Marketing",
  "Commerce and POS",
  "Service",
  "Finance",
  "Email and Collaboration",
  "Human Resources",
  "Legal",
  "Security and IT Management",
  "BI and Analytics",
  "Project Management",
  "Developer Platforms",
  "IoT",
];

const contentData = {
  Sales: [
    {
      title: "CRM",
      desc: "Comprehensive CRM platform for customer-facing teams.",
    },
    {
      title: "Bigin",
      desc: "Simple CRM for small businesses moving from spreadsheets.",
    },
    { title: "Forms", desc: "Build online forms for every business need." },
    {
      title: "SalesIQ",
      desc: "Live chat app to engage and convert website visitors.",
    },
    {
      title: "Bookings",
      desc: "Appointment scheduling app for consultations with customers.",
    },
    { title: "Sign", desc: "Digital signature app for businesses." },
    {
      title: "RouteIQ",
      desc: "Comprehensive sales map visualization and optimal route planning solution.",
    },
    {
      title: "Thrive",
      desc: "Complete loyalty and affiliate management platform.",
    },
    {
      title: "CRM Plus",
      desc: "Unified platform to deliver top-notch customer experience.",
    },
  ],
  Marketing: [
    { title: "Social", desc: "All-in-one social media management software." },
    {
      title: "Campaigns",
      desc: "Create, send, and track targeted email campaigns that drive sales.",
    },
    { title: "Forms", desc: "Build online forms for every business need." },
    {
      title: "Survey",
      desc: "Design surveys to reach and interact with your audience.",
    },
    {
      title: "Sites",
      desc: "Online website builder with extensive customisation options.",
    },
    {
      title: "PageSense",
      desc: "Website conversion optimization and personalisation platform.",
    },
    { title: "Backstage", desc: "End-to-end event management software." },
    {
      title: "Webinar",
      desc: "Webinar platform for webcasting online webinars.",
    },
    {
      title: "Marketing Automation",
      desc: "All-in-one marketing automation software.",
    },
    {
      title: "LandingPage",
      desc: "Smart landing page builder to increase conversion rates",
    },
    {
      title: "Publish",
      desc: "Manage all your local business listings on a single platform.",
    },
    {
      title: "SalesIQ",
      desc: "Live chat app to engage and convert website visitors.",
    },
    { title: "Sign", desc: "Digital signature app for businesses." },
    {
      title: "Thrive",
      desc: "Complete loyalty and affiliate management platform.",
    },
    {
      title: "CommunitySpaces",
      desc: "Online community platform for individuals and businesses to grow their network.",
    },
  ],
};

const ProductModel = () => {
  const [activeCategory, setActiveCategory] = useState("Sales");

  return (
    <div className="fixed top-0 left-0 w-full h-[80vh] bg-white shadow-lg z-50 overflow-hidden">
      {/* Internal Sub-header */}
      <header className="w-full px-8 py-3 border-b border-gray-200 bg-gray-100/40 shadow-sm">
        <div className="text-base text-gray-500 tracking-wide space-x-4 font-medium">
          <span className="hover:text-blue-600 cursor-pointer transition">
            AppsSuite
          </span>

          <span className="hover:text-blue-600 cursor-pointer transition">
            Zoho One
          </span>

          <span className="hover:text-blue-600 cursor-pointer transition">
            Marketplace
          </span>

          <span className="text-blue-600 font-semibold cursor-pointer transition">
            EXPLORE ALL PRODUCTS
          </span>
        </div>
      </header>

      {/* Content Section */}
      <div className="flex h-[calc(100%-56px)]">
        {/* Sidebar */}
        <aside className="w-72 border-r border-gray-200 bg-white overflow-y-auto p-4">
          <input
            type="text"
            placeholder="I'm looking for..."
            className="w-full mb-4 px-3 py-2 border rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li
                key={item}
                className={`cursor-pointer p-2 rounded hover:bg-gray-100 hover:text-red-400 font-medium ${
                  activeCategory === item ? "text-red-400" : ""
                }`}
                onClick={() => setActiveCategory(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6  bg-gray-100 overflow-y-auto">
          {contentData[activeCategory] ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData[activeCategory].map((app, index) => (
                <div key={index} className="bg-white  hover:bg-gray-50 hover:shadow-lg  p-4 shadow rounded-2xl">
                  <h3 className="text-lg font-semibold  text-gray-800 hover:text-blue-400">
                    {app.title}
                  </h3>
                  <p className="text-sm hover:text-blue-400 text-gray-600 mt-1">{app.desc}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">
              No data available for this category.
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductModel;
