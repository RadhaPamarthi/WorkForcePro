import React from 'react';

// Sidebar Component
const Sidebar = ({ sidenavOpen, onMenuClick }) => {
  return (
    <div
      id="sidebar"
      className={`bg-white h-screen shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out ${
        sidenavOpen ? 'block' : 'hidden sm:block'
      }`}
    >
      <div className="space-y-6 md:space-y-10 mt-10">
        <h1 className="font-bold text-4xl text-center md:hidden">
          D<span className="text-teal-600">.</span>
        </h1>
        <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
          Dashboard <span className="text-teal-600"></span>
        </h1>
        <div id="profile" className="space-y-3">
          <img
            src={process.env.PUBLIC_URL + '/images/Radha1.jpg'}
            alt="Avatar user"
            className="w-10 md:w-16 rounded-full mx-auto"
          />
          <div>
            <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
              Radha R
            </h2>
            <p className="text-xs text-gray-500 text-center">Administrator</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex border-2 border-gray-200 rounded-md focus-within:ring-0">
          <input
            type="text"
            className="w-full rounded-tl-md rounded-bl-md px-2 py-3 text-sm text-gray-600 focus:outline-none"
            placeholder="Search"
          />
          <button className="rounded-tr-md rounded-br-md px-2 py-3 hidden md:block focus:outline-none">
            <svg
              className="w-4 h-4 fill-current"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div id="menu" className="flex flex-col space-y-2">
          <MenuItem label="Dashboard" icon={<DashboardIcon />} onClick={() => onMenuClick('dashboard')} />
          <MenuItem label="Employees" icon={<EmployeesIcon />} onClick={() => onMenuClick('employees')} />
          <MenuItem label="Reports" icon={<ReportsIcon />} onClick={() => onMenuClick('reports')} />
          <MenuItem label="Messages" icon={<MessagesIcon />} onClick={() => onMenuClick('messages')} />
          <MenuItem label="Calendar" icon={<CalendarIcon />} onClick={() => onMenuClick('calendar')} />
          <MenuItem label="Table" icon={<TableIcon />} onClick={() => onMenuClick('table')} />
          <MenuItem label="UI Components" icon={<UIComponentsIcon />} onClick={() => onMenuClick('ui-components')} />
          <MenuItem label="Users" icon={<UsersIcon />} onClick={() => onMenuClick('users')} />
        </div>
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ icon, label, onClick }) => (
  <button
    className="text-sm font-medium text-gray-700 py-2 px-2 bg-transparent hover:bg-teal-500 hover:text-white rounded-md transition duration-150 ease-in-out w-full text-left flex items-center focus:outline-none"
    onClick={onClick}
  >
    <span className="inline-block">{icon}</span>
    <span className="ml-2">{label}</span>
  </button>
);

// Placeholder Icons
const DashboardIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const EmployeesIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
  </svg>
);

// Other placeholder icons...
const ReportsIcon = () => <DashboardIcon />;
const MessagesIcon = () => <DashboardIcon />;
const CalendarIcon = () => <DashboardIcon />;
const TableIcon = () => <DashboardIcon />;
const UIComponentsIcon = () => <DashboardIcon />;
const UsersIcon = () => <DashboardIcon />;

export default Sidebar;
