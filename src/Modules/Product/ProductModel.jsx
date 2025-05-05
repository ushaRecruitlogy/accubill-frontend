import React, { useState } from "react";
import { iconMap } from "../../assets/icons/icons";

const sidebarItems = [
  { name: "Recent Launches", icon: iconMap["Recent Launches"] },
  { name: "Sales", icon: iconMap["Sales"] },
  { name: "Marketing", icon: iconMap["Marketing"] },
  { name: "Service", icon: iconMap["Service"] },
  { name: "Finance", icon: iconMap["Finance"] },
  { name: "Email and Collaboration", icon: iconMap["Email and Collaboration"] },
  { name: "Human Resources", icon: iconMap["Human Resources"] },
  { name: "Legal", icon: iconMap["Legal"] },
  { name: "Project Management", icon: iconMap["Project Management"] },
];

const contentData = {
  "Recent Launches": [
    {
      title: "Payroll",

      desc: "payroll software with automated payment and filing",

      icon: iconMap["Payroll"],
    },
  ],

  Sales: [
    {
      title: "CRM",
      desc: "Comprehensive CRM platform for customer-facing teams.",
      icon: iconMap["CRM"],
    },
    {
      title: "Bigin",
      desc: "Simple CRM for small businesses moving from spreadsheets.",
      icon: iconMap["Bigin"],
    },
    // { title: "Forms", desc: "Build online forms for every business need." },
    // {
    //   title: "SalesIQ",
    //   desc: "Live chat app to engage and convert website visitors.",
    // },
    {
      title: "Bookings",
      desc: "Appointment scheduling app for consultations with customers.",
      icon: iconMap["Bookings"],
    },
    {
      title: "Sign",
      desc: "Digital signature app for businesses.",
      icon: iconMap["Sign"],
    },
    // {
    //   title: "RouteIQ",
    //   desc: "Comprehensive sales map visualization and optimal route planning solution.",
    // },
    // {
    //   title: "Thrive",
    //   desc: "Complete loyalty and affiliate management platform.",
    // },
    // {
    //   title: "CRM Plus",
    //   desc: "Unified platform to deliver top-notch customer experience.",
    // },
  ],
  Marketing: [
    {
      title: "Social",
      desc: "All-in-one social media management software.",
      icon: iconMap["Social"],
    },
    // {
    //   title: "Campaigns",
    //   desc: "Create, send, and track targeted email campaigns that drive sales.",
    // },
    // { title: "Forms", desc: "Build online forms for every business need." },
    {
      title: "Survey",
      desc: "Design surveys to reach and interact with your audience.",
      icon: iconMap["Survey"],
    },
    // {
    //   title: "Sites",
    //   desc: "Online website builder with extensive customisation options.",
    // },
    // {
    //   title: "PageSense",
    //   desc: "Website conversion optimization and personalisation platform.",
    // },
    {
      title: "Backstage",
      desc: "End-to-end event management software.",
      icon: iconMap["Backstage"],
    },
    {
      title: "Webinar",
      desc: "Webinar platform for webcasting online webinars.",
      icon: iconMap["Webinar"],
    },
    {
      title: "Marketing Automation",
      desc: "All-in-one marketing automation software.",
      icon: iconMap["Marketing Automation"],
    },
    {
      title: "LandingPage",
      desc: "Smart landing page builder to increase conversion rates",
      icon: iconMap["LandingPage"],
    },
    // {
    //   title: "Publish",
    //   desc: "Manage all your local business listings on a single platform.",
    // },
    // {
    //   title: "SalesIQ",
    //   desc: "Live chat app to engage and convert website visitors.",
    // },
    {
      title: "Sign",
      desc: "Digital signature app for businesses.",
      icon: iconMap["Sign"],
    },
    // {
    //   title: "Thrive",
    //   desc: "Complete loyalty and affiliate management platform.",
    // },
    {
      title: "CommunitySpaces",
      desc: "Online community platform for individuals and businesses to grow their network.",
      icon: iconMap["CommunitySpaces"],
    },
  ],

  Service: [
    {
      title: "Desk",
      desc: "help desk software to delivered to great customer support ",
      icon: iconMap["Desk"],
    },
    // {
    //   title: "Campaigns",
    //   desc: "Create, send, and track targeted email campaigns that drive sales.",
    // },
    // { title: "Forms", desc: "Build online forms for every business need." },
    {
      title: "FSM",
      desc: " End to end Field service management software for field technicians.",
      icon: iconMap["FSM"],
    },
    // {
    //   title: "Sites",
    //   desc: "Online website builder with extensive customisation options.",
    // },
    // {
    //   title: "PageSense",
    //   desc: "Website conversion optimization and personalisation platform.",
    // },
    {
      title: "Booking",
      desc: "Appointement sheduling app for consultetion with customer",
      icon: iconMap["Booking"],
    },
    // {
    //   title: "Webinar",
    //   desc: "Webinar platform for webcasting online webinars.",
    // },
    // {
    //   title: "Marketing Automation",
    //   desc: "All-in-one marketing automation software.",
    // },
    // {
    //   title: "LandingPage",
    //   desc: "Smart landing page builder to increase conversion rates",
    // },
    // {
    //   title: "Publish",
    //   desc: "Manage all your local business listings on a single platform.",
    // },
    // {
    //   title: "SalesIQ",
    //   desc: "Live chat app to engage and convert website visitors.",
    // },
    // { title: "Sign", desc: "Digital signature app for businesses." },
    // {
    //   title: "Thrive",
    //   desc: "Complete loyalty and affiliate management platform.",
    // },
    // {
    //   title: "CommunitySpaces",
    //   desc: "Online community platform for individuals and businesses to grow their network.",
    // },
  ],
  Finance: [
    {
      title: "Books",
      desc: "Powerfull accounting platform for growing business  ",
      icon: iconMap["Books"],
    },
    // {
    //   title: "Campaigns",
    //   desc: "Create, send, and track targeted email campaigns that drive sales.",
    // },
    // { title: "Forms", desc: "Build online forms for every business need." },
    {
      title: "Invoice ",
      desc: " 100% free invoicing solution. ",
      icon: iconMap["Invoice "],
    },
    {
      title: "Expense",
      desc: "Expense reporting software for business travel.",
      icon: iconMap["Expense"],
    },
    {
      title: "Inventory",

      desc: "powerfull stock managment and inventory control software   ",
      icon: iconMap["Inventory"],
    },
    {
      title: "Billing",

      desc: "end to end billing  Solution for business",
      icon: iconMap["Billing"],
    },
    {
      title: "Checkout",
      desc: "Online payment solution for your business.",
      icon: iconMap["Checkout"],
    },
    {
      title: "Payroll",

      desc: "payroll software with automated payment and filing",
      icon: iconMap["Payroll"],
    },
    {
      title: "Sign",

      desc: "Digital signature app for businesses.",
      icon: iconMap["Sign"],
    },
    // {
    //   title: "Email-Collaboration",
    //   desc: "Email and collaboration software for business.",
    // },
  ],
  "Email and Collaboration": [
    {
      title: "Meeting",
      desc: "online metting software for all your video conference and webinor need  ",
      icon: iconMap["Meeting"],
    },

    {
      title: "Sign",

      desc: "Digital signature app for businesses.",
      icon: iconMap["Sign"],
    },
    {
      title: "Booking",
      desc: "Appointement sheduling app for consultetion with customer",
      icon: iconMap["Booking"],
    },
    {
      title: "NoteBook",
      desc: " Beatufull home for all your notes",
      icon: iconMap["NoteBook"],
    },
  ],
  "Human Resources": [
    {
      title: "Expense",
      desc: "Expense reporting software for business travel.", 
      icon: iconMap["Expense"]
    },

    {
      title: "Sign",

      desc: "Digital signature app for businesses.",
      icon: iconMap["Sign"],
    },
    {
      title: "Payroll",

      desc: "payroll software with automated payment and filing",
      icon: iconMap["Payroll"],
    },
    {
      title: "Shift",
      desc: "Employee Sheduling and time tracking app",
      icon: iconMap["Shift"],
    },
  ],

  Legal: [
    {
      title: "Contracts",
      desc: "compresnsive contract life cycle managenent software",
      icon: iconMap["Contracts"],
    },
    {
      title: "Sign",

      desc: "Digital signature app for businesses.",
      icon: iconMap["Sign"],
    },
  ],
  "Project Management": [
    {
      title: "Projects",
      desc: "Manage track and collaborate on projects with your team.",
      icon: iconMap["Projects"],
    },
    {
      title: "Sprints",
      desc: "Planning and tracking tool for scrum team",
      icon: iconMap["Sprints"],
    },
    {
      title: "Bug Tracker ",
      desc: "Automated bug tracking and reporting tool for managing bugs.",
      icon: iconMap["Bug Tracker "],
    },
  ],
};

const ProductModel = () => {
  const [activeCategory, setActiveCategory] = useState("Sales");

  return (
    <div className="fixed top-0 left-0 w-full h-[80vh] bg-white shadow-lg z-50 overflow-hidden">
      {/* Internal Sub-header */}
      <header className="w-full px-8 py-2 mt-2 border-b border-gray-200 bg-gray-100/40 shadow-sm">
        <div className="text-base text-gray-500 tracking-wide space-x-4 font-medium">
          <span className=" fontTopHeading text-[15px]! hover:text-[var(--color-blue)] mt-2 cursor-pointer headings transition">
            Apps
          </span>

          {/* ? */}

          {/* <span className="text-blue-600 font-semibold cursor-pointer transition">
            EXPLORE ALL PRODUCTS
          </span> */}
        </div>
      </header>

      {/* Content Section */}
      <div className="flex h-[calc(100%-56px)]">
        {/* Sidebar */}
        {/* <aside className="w-72 border-r border-gray-200 bg-white overflow-y-auto p-3"> */}
        <aside className="w-72 border-r border-gray-200 bg-white overflow-y-auto p-3 scrollbar-hidden">
          <input
            type="text"
            placeholder="I'm looking for..."
            className="w-full mb-4 px-3 py-2 fontHeading    border rounded outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
          />
          <ul className="space-y-1">
            {sidebarItems.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className={` flex  gap-2 items-center cursor-pointer p-2  fontTopHeading text-[12px]! font-bold! rounded hover:bg-gray-100 hover:text-red-400 fontTopHeading text-[15px]! ${
                  activeCategory === name ? "text-red-400!" : ""
                }`}
                onClick={() => setActiveCategory(name)}
              >
                <span className="text-[16px]">{<Icon />}</span>
                {name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-5 bg-gray-100 overflow-y-auto">
          {contentData[activeCategory] ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData[activeCategory].map((app, index) => (
             <div key={index} className="bg-white hover:bg-gray-50 hover:shadow-lg p-4 shadow rounded-2xl text-center">
             {app.icon && (
               <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl border border-blue-500 text-blue-600">
       
                 <app.icon className="w-10 h-10 text-blue-500" />
               </div>
               </div>
             )}
             <h3 className="fontTopHeading font-bold! text-[16px]! hover:text-[var(--color-blue)] transition duration-200 ease-in-out">
               {app.title}
             </h3>
             <p className="fontHeading text-[12px]!  mt-1 hover:text-[var(--color-blue)]">
               {app.desc}
             </p>
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
